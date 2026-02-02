import { Request, Response } from 'express';
import { Todo } from '../src/interfaces/todo.interface';

class TodoController {
    public todos: Todo[] = [];

    public getTodos = (req: Request, res: Response) => {
        // Implementation later
    };

    public createTodo = (req: Request, res: Response) => {
        // Implementation later
    };

    public updateTodo = (req: Request, res: Response) => {
        // Implementation later
    };

    public deleteTodo = (req: Request, res: Response) => {
        // Implementation later
    };
}

export default TodoController;
