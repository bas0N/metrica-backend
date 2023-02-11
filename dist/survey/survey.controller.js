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
exports.SurveyController = void 0;
const common_1 = require("@nestjs/common");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const passport_1 = require("@nestjs/passport");
const ChangeState_dto_1 = require("./dto/ChangeState.dto");
const FillSurvey_dto_1 = require("./dto/FillSurvey.dto");
const survey_service_1 = require("./survey.service");
let SurveyController = class SurveyController {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    createSurvey(email, { addSurveyDto }) {
        return this.surveyService.createSurvey(email, addSurveyDto);
    }
    getSurveys(email) {
        try {
            return this.surveyService.getSurveys(email);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    getSurveysPaginated(email, num) {
        if (isNaN(Number(num)) || Number(num) < 1) {
            throw new common_1.BadRequestException('The given page is not a number');
        }
        else {
            const pageNum = Number(num);
            return this.surveyService.getSurveysPaginated(email, pageNum);
        }
    }
    getNumberOfSurveyPages(email) {
        try {
            return this.surveyService.getNumberOfSurveyPages(email);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    getSurveyDetails(id) {
        try {
            return this.surveyService.getSurveyDetails(id);
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    searchSurveys({ email, searchSurveysDto, }) {
        try {
            return this.surveyService.searchSurveys(email, searchSurveysDto);
        }
        catch (err) {
            console.log(err);
        }
    }
    deleteSurvey(id) {
        return this.surveyService.deleteSurvey(id);
    }
    changeSurveystate(changeStateDto) {
        return this.surveyService.changeSurveystate(changeStateDto);
    }
    fillSurvey(id, fillSurveyDto) {
        return this.surveyService.fillSurvey(fillSurveyDto, id);
    }
    sendSurvey() {
        return this.surveyService.sendSurvey();
    }
    startSurvey(id) {
        return this.surveyService.startSurvey(id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('auth0')),
    (0, common_1.Post)('createSurvey'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "createSurvey", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('auth0')),
    (0, common_1.Get)('getSurveys'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "getSurveys", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('auth0')),
    (0, common_1.Get)('getSurveysPaginated/:num'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "getSurveysPaginated", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('auth0')),
    (0, common_1.Get)('getNumberOfSurveyPages'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "getNumberOfSurveyPages", null);
__decorate([
    (0, common_1.Get)('/:surveyId'),
    __param(0, (0, common_1.Param)('surveyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "getSurveyDetails", null);
__decorate([
    (0, common_1.Get)('searchSurveys'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "searchSurveys", null);
__decorate([
    (0, common_1.Delete)('/:surveyId'),
    __param(0, (0, common_1.Param)('surveyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "deleteSurvey", null);
__decorate([
    (0, common_1.Put)('changeSurveyState'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangeState_dto_1.ChangeStateDto]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "changeSurveystate", null);
__decorate([
    (0, common_1.Put)('fillSurvey/:surveyId'),
    __param(0, (0, common_1.Param)('surveyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, FillSurvey_dto_1.FillSurveyDto]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "fillSurvey", null);
__decorate([
    (0, common_1.Post)('sendSurvey'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "sendSurvey", null);
__decorate([
    (0, common_1.Get)('startSurvey/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyController.prototype, "startSurvey", null);
SurveyController = __decorate([
    (0, common_1.Controller)('survey'),
    __metadata("design:paramtypes", [survey_service_1.SurveyService])
], SurveyController);
exports.SurveyController = SurveyController;
//# sourceMappingURL=survey.controller.js.map