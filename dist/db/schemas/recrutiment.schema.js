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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruitmentSchema = exports.Recruitment = exports.SurveyType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var SurveyType;
(function (SurveyType) {
    SurveyType[SurveyType["FRONTEND"] = 0] = "FRONTEND";
    SurveyType[SurveyType["BACKEND"] = 1] = "BACKEND";
    SurveyType[SurveyType["UXUI"] = 2] = "UXUI";
    SurveyType[SurveyType["DEVOPS"] = 3] = "DEVOPS";
})(SurveyType = exports.SurveyType || (exports.SurveyType = {}));
let Recruitment = class Recruitment {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Recruitment.prototype, "creatorEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Recruitment.prototype, "recruitmentId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Recruitment.prototype, "recruitmentName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Recruitment.prototype, "recruitmentDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Recruitment.prototype, "recruitmentDeadline", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Recruitment.prototype, "surveyType", void 0);
Recruitment = __decorate([
    (0, mongoose_1.Schema)()
], Recruitment);
exports.Recruitment = Recruitment;
exports.RecruitmentSchema = mongoose_1.SchemaFactory.createForClass(Recruitment);
//# sourceMappingURL=recrutiment.schema.js.map