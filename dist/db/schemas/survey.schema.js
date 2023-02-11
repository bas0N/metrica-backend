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
exports.SurveySchema = exports.Survey = exports.SeachTextProperty = exports.SurveyType = exports.SurveyStatus = void 0;
const class_transformer_1 = require("class-transformer");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const recrutiment_schema_1 = require("./recrutiment.schema");
const FillSurvey_dto_1 = require("../../survey/dto/FillSurvey.dto");
var SurveyStatus;
(function (SurveyStatus) {
    SurveyStatus[SurveyStatus["FILLED"] = 0] = "FILLED";
    SurveyStatus[SurveyStatus["PENDING"] = 1] = "PENDING";
    SurveyStatus[SurveyStatus["DRAFT"] = 2] = "DRAFT";
})(SurveyStatus = exports.SurveyStatus || (exports.SurveyStatus = {}));
var SurveyType;
(function (SurveyType) {
    SurveyType[SurveyType["FRONTEND"] = 0] = "FRONTEND";
    SurveyType[SurveyType["BACKEND"] = 1] = "BACKEND";
    SurveyType[SurveyType["UXUI"] = 2] = "UXUI";
    SurveyType[SurveyType["DEVOPS"] = 3] = "DEVOPS";
})(SurveyType = exports.SurveyType || (exports.SurveyType = {}));
var SeachTextProperty;
(function (SeachTextProperty) {
    SeachTextProperty[SeachTextProperty["NAME"] = 0] = "NAME";
    SeachTextProperty[SeachTextProperty["ID"] = 1] = "ID";
    SeachTextProperty[SeachTextProperty["EMAIL"] = 2] = "EMAIL";
})(SeachTextProperty = exports.SeachTextProperty || (exports.SeachTextProperty = {}));
let Survey = class Survey {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Survey.prototype, "creatorEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Survey.prototype, "recipientEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Survey.prototype, "candidateFirstName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Survey.prototype, "candidateLastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Survey.prototype, "surveyStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: recrutiment_schema_1.Recruitment.name }),
    (0, class_transformer_1.Type)(() => recrutiment_schema_1.Recruitment),
    __metadata("design:type", recrutiment_schema_1.Recruitment)
], Survey.prototype, "recruitment", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", FillSurvey_dto_1.FillSurveyDto)
], Survey.prototype, "surveyData", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Survey.prototype, "terminationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date(), required: false }),
    __metadata("design:type", Date)
], Survey.prototype, "creationDate", void 0);
Survey = __decorate([
    (0, mongoose_1.Schema)()
], Survey);
exports.Survey = Survey;
exports.SurveySchema = mongoose_1.SchemaFactory.createForClass(Survey);
//# sourceMappingURL=survey.schema.js.map