import { Model } from 'mongoose';
import { AddRecruitmentDto } from 'src/recruitment/dto/AddRecruitment.dto';
import { EditRecruitmentDto } from 'src/recruitment/dto/EditRecruitment.dto';
import { Recruitment, RecruitmentDocument } from '../schemas/recrutiment.schema';
export declare class RecruitmentRepository {
    private recruitmentModel;
    constructor(recruitmentModel: Model<RecruitmentDocument>);
    findRecruitment(recruitmentId: string): Promise<Recruitment>;
    editRecruitmentProcess(editRecruitmentData: EditRecruitmentDto): Promise<Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addRecruitment(email: string, addRecruitmentDto: AddRecruitmentDto): Promise<Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllRecruitments(email: string): Promise<(Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    editRecruitment(): Promise<void>;
    deleteRecruitment(recruitmentId: string): Promise<Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
