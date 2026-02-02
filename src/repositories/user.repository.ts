import { User } from '../interfaces/user.interface';

class UserRepository {
    private users: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', isActive: true },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', isActive: true },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'user', isActive: false },
    ];

    public async findAll(): Promise<User[]> {
        return this.users;
    }

    public async findById(userId: number): Promise<User | null> {
        const foundUser = this.users.find(user => user.id === userId);
        return foundUser || null;
    }

    public async create(userData: Omit<User, 'id'>): Promise<User> {
        const newId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
        const newUser: User = {
            id: newId,
            ...userData,
        };
        this.users.push(newUser);
        return newUser;
    }

    public async update(userId: number, userData: Partial<User>): Promise<User | null> {
        const index = this.users.findIndex(user => user.id === userId);
        if (index === -1) return null;

        this.users[index] = { ...this.users[index], ...userData };
        return this.users[index];
    }

    public async delete(userId: number): Promise<User | null> {
        const index = this.users.findIndex(user => user.id === userId);
        if (index === -1) return null;

        const deletedUser = this.users.splice(index, 1)[0];
        return deletedUser;
    }
}

export default UserRepository;
