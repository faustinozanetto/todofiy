import { Arg, Int, Query, Resolver } from 'type-graphql';
import { TodoResponse } from '../responses/todo';
import { TodosResponse } from '../responses/todo/Todos';
import { Todo } from '../entities';

@Resolver()
export class TodoResolver {
  /**
   *
   * @param id of the todo we are going to search.
   * @returns if found, the Todo associated with the given id.
   */
  @Query(() => TodoResponse)
  async todo(@Arg('id', () => Int) id: number): Promise<TodoResponse> {
    const todo = await Todo.findOne(id);

    if (!todo) {
      return {
        errors: [
          {
            field: 'todo',
            message: 'No todo with that given id was found!',
          },
        ],
      };
    }

    return { todo };
  }

  /**
   *
   * @returns all the todos in the database.
   */
  @Query(() => TodosResponse)
  async todos(): Promise<TodosResponse> {
    const todos = await Todo.find();

    if (!todos) {
      return {
        errors: [
          {
            field: 'todos',
            message: 'There has been an error while trying to search todos!',
          },
        ],
      };
    }

    return { todos };
  }
}
