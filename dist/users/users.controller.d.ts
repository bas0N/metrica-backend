import { SetCompanyName } from './dto/SetCompanyName.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    checkIfPaymentNeeded(email: any, request: any): Promise<{
        paymentNeeded: boolean;
        configNeeded: boolean;
    }>;
    setCompanyName(email: any, { companyName }: SetCompanyName): Promise<import("../db/schemas/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getMe(email: any): Promise<import("../db/schemas/user.schema").User>;
}
