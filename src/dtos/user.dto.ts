export class CreateUserDto {
    public email: string;
    public name: string;
    public role: 'admin' | 'user';
    public isActive: boolean;

    constructor(email: string, name: string, role: 'admin' | 'user', isActive: boolean) {
        this.email = email;
        this.name = name;
        this.role = role;
        this.isActive = isActive;
    }
}

export class UpdateUserDto {
    public email?: string;
    public name?: string;
    public role?: 'admin' | 'user';
    public isActive?: boolean;

    constructor(email?: string, name?: string, role?: 'admin' | 'user', isActive?: boolean) {
        this.email = email;
        this.name = name;
        this.role = role;
        this.isActive = isActive;
    }
}
