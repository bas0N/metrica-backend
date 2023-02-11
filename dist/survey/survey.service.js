"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyService = void 0;
const common_1 = require("@nestjs/common");
const survey_repository_1 = require("../db/repositories/survey.repository");
const survey_schema_1 = require("../db/schemas/survey.schema");
const mail_1 = __importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
let SurveyService = class SurveyService {
    constructor(surveyRepository) {
        this.surveyRepository = surveyRepository;
    }
    async startSurvey(id) {
        const survey = await this.surveyRepository.startSurvey(id);
        if (!survey) {
            throw new common_1.BadRequestException('Error occured while starting survey.');
        }
        const response = {
            message: 'Survey has been started succesfully',
        };
        return response;
    }
    async fillSurvey(fillSurveyDto, id) {
        const survey = await this.surveyRepository.fillSurvey(fillSurveyDto, id);
        if (!survey) {
            throw new common_1.BadRequestException('Error occured');
        }
        return survey;
    }
    async createSurvey(email, addSurveyDto) {
        console.log(addSurveyDto);
        const survey = await this.surveyRepository.createSurvey(email, addSurveyDto);
        console.log(`http://localhost:3002/form/start-form/${survey === null || survey === void 0 ? void 0 : survey._id.toString()}`);
        const msg = {
            to: survey.creatorEmail,
            from: 'conor.murphy.irl@gmail.com',
            subject: 'Fill out your Tech CV survey with Metrica!',
            templateId: 'd-000064eb0b504d899fe4c9d0fd9cd2a1',
            dynamic_template_data: {
                surveyUrl: `http://localhost:3002/form/start-form/${survey === null || survey === void 0 ? void 0 : survey._id.toString()}`,
                recipentName: survey.candidateFirstName,
            },
        };
        mail_1.default
            .send(msg)
            .then(() => {
            console.log('Email sent');
        })
            .catch((error) => {
            console.error(error);
        });
        return survey;
    }
    async getSurveys(email) {
        const surveys = await this.surveyRepository.getSurveys(email);
        if (!surveys) {
            throw new common_1.BadRequestException('Incorrect survey id.');
        }
        return surveys;
    }
    async searchSurveys(email, searchSurveysDto) {
        return { searchsurvey: 'search' };
    }
    async getNumberOfSurveyPages(email) {
        const { surveyCount } = await this.surveyRepository.getSurveysCount(email);
        return { numOfSurveyPages: Math.ceil(surveyCount / 3) };
    }
    async getSurveysPaginated(email, pageNum) {
        try {
            const pageSize = 3;
            const { surveyCount } = await this.surveyRepository.getSurveysCount(email);
            if (Math.ceil(surveyCount / pageSize) < pageNum) {
                throw new common_1.BadRequestException();
            }
            const surveys = await this.surveyRepository.getSurveys(email);
            if (Math.floor(surveyCount / pageSize) + 1 == pageNum) {
                return {
                    surveys: surveys.slice((pageNum - 1) * pageSize, (pageNum - 1) * pageSize + (surveyCount % pageSize)),
                    pagesAvailable: Math.ceil(surveyCount / pageSize),
                    totalItems: surveyCount,
                };
            }
            else {
                return {
                    surveys: surveys.slice((pageNum - 1) * pageSize, (pageNum - 1) * pageSize + 3),
                    pagesAvailable: Math.ceil(surveyCount / pageSize),
                    totalItems: surveyCount,
                };
            }
        }
        catch (err) {
            throw new common_1.BadRequestException('Bad page num.');
        }
    }
    async getSurveyDetails(id) {
        const survey = await this.surveyRepository.getSurveyDetails(id);
        if (!survey) {
            throw new common_1.BadRequestException('Incorrect survey id.');
        }
        return survey;
    }
    async deleteSurvey(id) {
        const survey = await this.surveyRepository.deleteSurvey(id);
        if (!survey) {
            throw new common_1.BadRequestException('Error occured while removing survey.');
        }
        const response = {
            message: 'Survey has been deleted succesfully',
        };
        return response;
    }
    async changeSurveystate(changeStateDto) {
        if (survey_schema_1.SurveyStatus[changeStateDto.newStatus] === undefined) {
            throw new common_1.BadRequestException('Incorrect state value.');
        }
        const survey = await this.surveyRepository.changeSurveystate(changeStateDto);
        if (!survey) {
            throw new common_1.BadRequestException('Error occured while updating survey.');
        }
        const response = {
            message: 'Survey has been updated succesfully',
        };
        return response;
    }
    async sendSurvey() {
        return { output: 'sendSurvey' };
    }
};
SurveyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [survey_repository_1.SurveyRepository])
], SurveyService);
exports.SurveyService = SurveyService;
//# sourceMappingURL=survey.service.js.map