/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
