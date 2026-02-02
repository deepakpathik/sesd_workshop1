import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validationMiddleware from '../middlewares/validation.middleware';

class UserRoute {
    public path = '/users';
    public router = Router();
    public userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.userController.getUsers);
        this.router.get(`${this.path}/:id`, this.userController.getUserById);
        this.router.post(`${this.path}`, validationMiddleware(['email', 'name', 'role']), this.userController.createUser);
        this.router.put(`${this.path}/:id`, validationMiddleware([], true), this.userController.updateUser); // Skip required checks for update
        this.router.delete(`${this.path}/:id`, this.userController.deleteUser);
    }
}

export default UserRoute;
