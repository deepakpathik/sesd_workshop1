import { User } from '../interfaces/user.interface';
import UserRepository from '../repositories/user.repository';

class UserService {
    public userRepository = new UserRepository();

    public async findAllUser(): Promise<User[]> {
        const allUsers: User[] = await this.userRepository.findAll();
        return allUsers;
    }

    public async findUserById(userId: number): Promise<User> {
        const findUser: User | null = await this.userRepository.findById(userId);
        if (!findUser) throw new Error("User doesn't exist");
        return findUser;
    }

    public async createUser(userData: Omit<User, 'id'>): Promise<User> {
        const createUserData: User = await this.userRepository.create(userData);
        return createUserData;
    }

    public async updateUser(userId: number, userData: Partial<User>): Promise<User> {
        const findUser: User | null = await this.userRepository.findById(userId);
        if (!findUser) throw new Error("User doesn't exist");

        const updateUserData: User | null = await this.userRepository.update(userId, userData);
        if (!updateUserData) throw new Error("Update failed"); // Should not happen if findById passed

        return updateUserData;
    }

    public async deleteUser(userId: number): Promise<User> {
        const findUser: User | null = await this.userRepository.findById(userId);
        if (!findUser) throw new Error("User doesn't exist");

        const deleteUserData: User | null = await this.userRepository.delete(userId);
        if (!deleteUserData) throw new Error("Delete failed");

        return deleteUserData;
    }
}

export default UserService;
