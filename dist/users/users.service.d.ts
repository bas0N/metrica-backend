import { UsersRepository } from 'src/db/repositories/users.repository';
import { User } from 'src/db/schemas/user.schema';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getMe(email: string): Promise<User>;
    setCompanyName(email: string, companyName: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findUser(email: string): Promise<User | undefined>;
    addUser(email: string, bearerToken: string): Promise<User | undefined>;
    checkIfPaymentNeeded(email: string, bearerToken: string): Promise<{
        paymentNeeded: boolean;
        configNeeded: boolean;
    }>;
}
