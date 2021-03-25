import { ObjectType, Field } from 'type-graphql';
import { User } from '../entities';
import { FieldError } from '.';

/**
 * Response used when running User Related queries.
 */
@ObjectType()
export class UserResponse {
  /**
   * Error variable when something has gone wrong.
   */
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}
