import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { User } from '../interfaces/user.interface';

class UserController {
    public userService = new UserService();

    public getUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;
            const params = {
                search: req.query.search as string,
                role: req.query.role as string,
                isActive: req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined,
                page,
                limit
            };
            const { users, total } = await this.userService.findAllUser(params);
            res.status(200).json({ data: users, total, page, limit, message: 'findAll' });
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Something went wrong' });
        }
    };

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = Number(req.params.id);
            const findOneUserData: User = await this.userService.findUserById(userId);
            res.status(200).json({ data: findOneUserData, message: 'findOne' });
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Something went wrong' });
        }
    };

    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userData: Omit<User, 'id'> = req.body;
            const createUserData: User = await this.userService.createUser(userData);
            res.status(201).json({ data: createUserData, message: 'created' });
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Something went wrong' });
        }
    };

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = Number(req.params.id);
            const userData: Partial<User> = req.body;
            const updateUserData: User = await this.userService.updateUser(userId, userData);
            res.status(200).json({ data: updateUserData, message: 'updated' });
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Something went wrong' });
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const userId = Number(req.params.id);
            const deleteUserData: User = await this.userService.deleteUser(userId);
            res.status(200).json({ data: deleteUserData, message: 'deleted' });
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Something went wrong' });
        }
    };
}

export default UserController;
