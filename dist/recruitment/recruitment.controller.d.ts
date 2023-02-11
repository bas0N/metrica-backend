import { AddRecruitmentDto } from './dto/AddRecruitment.dto';
import { EditRecruitmentDto } from './dto/EditRecruitment.dto';
import { RecruitmentService } from './recruitment.service';
export declare class RecruitmentController {
    private readonly recruitmentService;
    constructor(recruitmentService: RecruitmentService);
    addRecruitmentProcess(email: any, addRecruitmentDto: AddRecruitmentDto): Promise<import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllRecruitments(email: any): Promise<(import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    editRecruitmentProcess(editRecruitmentData: EditRecruitmentDto): Promise<import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteRecruitment(recruitmentId: string): Promise<import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
