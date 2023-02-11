import { RecruitmentRepository } from 'src/db/repositories/recruitment.repository';
import { AddRecruitmentDto } from './dto/AddRecruitment.dto';
import { EditRecruitmentDto } from './dto/EditRecruitment.dto';
export declare class RecruitmentService {
    private recruitmentRepository;
    constructor(recruitmentRepository: RecruitmentRepository);
    addRecruitmentProcess(email: string, addRecruitmentDto: AddRecruitmentDto): Promise<import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    editRecruitmentProcess(editRecruitmentData: EditRecruitmentDto): Promise<import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteRecruitment(recruitmentId: string): Promise<import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllRecruitments(email: string): Promise<(import("../db/schemas/recrutiment.schema").Recruitment & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
