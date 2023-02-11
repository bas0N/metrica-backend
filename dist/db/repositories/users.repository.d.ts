import { Model } from 'mongoose';
import { UserDocument, User } from '../schemas/user.schema';
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    setCompanyName(email: string, companyName: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addUser(email: string, bearerToken: string): Promise<User | null>;
    findUser(email: string): Promise<User>;
    setPaymentNeeded(email: string, paymentNeeded: boolean): Promise<User>;
    setPaymentDate(email: string, chosenPlan: string): Promise<User>;
}
