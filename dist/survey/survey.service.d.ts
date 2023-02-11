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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ResponseDto } from 'src/config/response.dto';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
import { AddSurveyDto } from './dto/AddSurvey.dto';
import { ChangeStateDto } from './dto/ChangeState.dto';
import { FillSurveyDto } from './dto/FillSurvey.dto';
export declare class SurveyService {
    private surveyRepository;
    constructor(surveyRepository: SurveyRepository);
    startSurvey(id: string): Promise<ResponseDto>;
    fillSurvey(fillSurveyDto: FillSurveyDto, id: string): Promise<import("src/db/schemas/survey.schema").Survey & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createSurvey(email: string, addSurveyDto: AddSurveyDto): Promise<any>;
    getSurveys(email: string): Promise<import("src/db/schemas/survey.schema").Survey[]>;
    searchSurveys(email: any, searchSurveysDto: any): Promise<{
        searchsurvey: string;
    }>;
    getNumberOfSurveyPages(email: string): Promise<{
        numOfSurveyPages: number;
    }>;
    getSurveysPaginated(email: string, pageNum: number): Promise<{
        surveys: import("src/db/schemas/survey.schema").Survey[];
        pagesAvailable: number;
        totalItems: number;
    }>;
    getSurveyDetails(id: string): Promise<import("src/db/schemas/survey.schema").Survey>;
    deleteSurvey(id: string): Promise<ResponseDto>;
    changeSurveystate(changeStateDto: ChangeStateDto): Promise<ResponseDto>;
    sendSurvey(): Promise<{
        output: string;
    }>;
}
