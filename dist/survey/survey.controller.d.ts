import { AddSurveyDto } from './dto/AddSurvey.dto';
import { ChangeStateDto } from './dto/ChangeState.dto';
import { FillSurveyDto } from './dto/FillSurvey.dto';
import { SearchSurveysDto } from './dto/SearchSurveys.dto';
import { SurveyService } from './survey.service';
export declare class SurveyController {
    private readonly surveyService;
    constructor(surveyService: SurveyService);
    createSurvey(email: any, { addSurveyDto }: {
        addSurveyDto: AddSurveyDto;
    }): Promise<any>;
    getSurveys(email: any): Promise<import("../db/schemas/survey.schema").Survey[]>;
    getSurveysPaginated(email: any, num: string): Promise<{
        surveys: import("../db/schemas/survey.schema").Survey[];
        pagesAvailable: number;
        totalItems: number;
    }>;
    getNumberOfSurveyPages(email: any): Promise<{
        numOfSurveyPages: number;
    }>;
    getSurveyDetails(id: string): Promise<import("../db/schemas/survey.schema").Survey>;
    searchSurveys({ email, searchSurveysDto, }: {
        email: string;
        searchSurveysDto: SearchSurveysDto;
    }): Promise<{
        searchsurvey: string;
    }>;
    deleteSurvey(id: string): Promise<import("../config/response.dto").ResponseDto>;
    changeSurveystate(changeStateDto: ChangeStateDto): Promise<import("../config/response.dto").ResponseDto>;
    fillSurvey(id: string, fillSurveyDto: FillSurveyDto): Promise<import("../db/schemas/survey.schema").Survey & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    sendSurvey(): Promise<{
        output: string;
    }>;
    startSurvey(id: string): Promise<import("../config/response.dto").ResponseDto>;
}
