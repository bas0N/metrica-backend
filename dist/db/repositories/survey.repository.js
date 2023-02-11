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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const recrutiment_schema_1 = require("../schemas/recrutiment.schema");
const survey_schema_1 = require("../schemas/survey.schema");
const survey_schema_2 = require("../schemas/survey.schema");
const user_schema_1 = require("../schemas/user.schema");
const recruitment_repository_1 = require("./recruitment.repository");
const users_repository_1 = require("./users.repository");
let SurveyRepository = class SurveyRepository {
    constructor(surveyModel, userModel, recruitmentModel, userRepository, recruitmentRepository) {
        this.surveyModel = surveyModel;
        this.userModel = userModel;
        this.recruitmentModel = recruitmentModel;
        this.userRepository = userRepository;
        this.recruitmentRepository = recruitmentRepository;
    }
    async startSurvey(id) {
        try {
            const survey = await this.surveyModel.findById(id);
            if (!survey) {
                return undefined;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async fillSurvey(fillSurveyDto, id) {
        try {
            const survey = await this.surveyModel.findByIdAndUpdate(id, {
                surveyData: fillSurveyDto,
            });
            if (!survey) {
                return undefined;
            }
            return survey;
        }
        catch (err) {
            console.log(err);
        }
    }
    async createSurvey(email, addSurveyDto) {
        const recruitment = await this.recruitmentRepository.findRecruitment(addSurveyDto.recruitmentId);
        const survey = Object.assign(Object.assign({ creatorEmail: email }, addSurveyDto), { surveyStatus: survey_schema_1.SurveyStatus[addSurveyDto.surveyStatus] !== undefined
                ? survey_schema_1.SurveyStatus[addSurveyDto.surveyStatus]
                : survey_schema_1.SurveyStatus['PENDING'], recruitment });
        const newSurvey = new this.surveyModel(survey);
        return newSurvey.save();
    }
    async getSurveyDetails(id) {
        try {
            const survey = await (await this.surveyModel.findById(id)).populate('recruitment');
            if (!survey) {
                return undefined;
            }
            return survey;
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    }
    async getSurveys(email) {
        try {
            const surveys = await this.surveyModel
                .find({ creatorEmail: email })
                .populate('recruitment');
            if (!surveys) {
                return undefined;
            }
            return surveys;
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    }
    async getSurveysCount(email) {
        try {
            return {
                surveyCount: await this.surveyModel.count({ creatorEmail: email }),
            };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    async deleteSurvey(id) {
        try {
            const survey = await this.surveyModel.findByIdAndDelete(id);
            if (!survey) {
                return undefined;
            }
            console.log(survey);
            return survey;
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    }
    async changeSurveystate({ newStatus, id }) {
        try {
            const survey = await this.surveyModel.findByIdAndUpdate(id, {
                surveyStatus: survey_schema_1.SurveyStatus[newStatus],
            });
            if (!survey) {
                return undefined;
            }
            return survey;
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    }
};
SurveyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(survey_schema_2.Survey.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(recrutiment_schema_1.Recruitment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        users_repository_1.UsersRepository,
        recruitment_repository_1.RecruitmentRepository])
], SurveyRepository);
exports.SurveyRepository = SurveyRepository;
//# sourceMappingURL=survey.repository.js.map