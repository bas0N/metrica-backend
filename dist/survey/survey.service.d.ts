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
