import { Request, Response } from 'express';
import { Todo } from '../src/interfaces/todo.interface';

class TodoController {
    public todos: Todo[] = [];

    public getTodos = (req: Request, res: Response) => {
        try {
            res.status(200).json({ data: this.todos, message: 'findAll' });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    };

    public createTodo = (req: Request, res: Response) => {
        try {
            const todoData: Todo = req.body;
            // Simple ID generation for demo
            const newTodo: Todo = { ...todoData, id: this.todos.length + 1 };
            this.todos.push(newTodo);
            res.status(201).json({ data: newTodo, message: 'created' });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    };

    public updateTodo = (req: Request, res: Response) => {
        try {
            const todoId = Number(req.params.id);
            const todoData: Todo = req.body;
            const findTodoIndex = this.todos.findIndex(todo => todo.id === todoId);

            if (findTodoIndex !== -1) {
                this.todos[findTodoIndex] = { ...this.todos[findTodoIndex], ...todoData };
                const updateTodo = this.todos[findTodoIndex];
                res.status(200).json({ data: updateTodo, message: 'updated' });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error });
        }
    };

    public deleteTodo = (req: Request, res: Response) => {
        try {
            const todoId = Number(req.params.id);
            const findTodoIndex = this.todos.findIndex(todo => todo.id === todoId);

            if (findTodoIndex !== -1) {
                const deleteTodo = this.todos.splice(findTodoIndex, 1)[0];
                res.status(200).json({ data: deleteTodo, message: 'deleted' });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error });
        }
    };
}

export default TodoController;
