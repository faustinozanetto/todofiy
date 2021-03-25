import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { UsersResponse, UserResponse } from '../responses';
import { getConnection } from 'typeorm';
import { TodofyContext } from 'types';
import { User } from '../entities';
import { validateUserRegistration } from '../utils';
import { UserCredentialsInput } from '../inputs';
import argon2 from 'argon2';
import { logger } from '../index';
import { LogLevel } from '../logger';

@Resolver()
export class UserResolver {
  @Query(() => UsersResponse)
  async getUsers(): Promise<UsersResponse> {
    const foundUsers = await User.find();
    if (foundUsers) {
      return {
        foundUsers,
      };
    }

    return {
      errors: [{ field: 'users', message: 'Failed to retrieve Users!' }],
    };
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('input') input: UserCredentialsInput,
    @Ctx() {}: TodofyContext
  ): Promise<UserResponse> {
    const errors = validateUserRegistration(input);
    if (errors) {
      return { errors };
    }

    // Hashing Password
    const hashedPassword = await argon2.hash(input.password);
    let user;
    try {
      const result = await getConnection('todofy-db')
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: input.username,
          email: input.email,
          password: hashedPassword,
        })
        .returning('*')
        .execute();
      user = result.raw[0];
      logger.log(
        LogLevel.INFO,
        'Successfully inserted user: ' + JSON.stringify(user)
      );
    } catch (error) {
      if (error.code === '23505') {
        return {
          errors: [
            {
              field: 'username',
              message: 'Username already taken',
            },
          ],
        };
      }
    }
    return { user };
  }
}
