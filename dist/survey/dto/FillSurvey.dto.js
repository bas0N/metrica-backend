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
exports.FillSurveyDto = exports.PersonalLinksSurveyDto = exports.AboutYouSurveyDto = exports.TechnologiesSurveyDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class TechnologiesSurveyDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], TechnologiesSurveyDto.prototype, "languages", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TechnologiesSurveyDto.prototype, "frontend", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TechnologiesSurveyDto.prototype, "backend", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TechnologiesSurveyDto.prototype, "devops", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TechnologiesSurveyDto.prototype, "databases", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TechnologiesSurveyDto.prototype, "uxui", void 0);
exports.TechnologiesSurveyDto = TechnologiesSurveyDto;
class AboutYouSurveyDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AboutYouSurveyDto.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AboutYouSurveyDto.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AboutYouSurveyDto.prototype, "description", void 0);
exports.AboutYouSurveyDto = AboutYouSurveyDto;
class PersonalLinksSurveyDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], PersonalLinksSurveyDto.prototype, "githubUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], PersonalLinksSurveyDto.prototype, "linkedinUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], PersonalLinksSurveyDto.prototype, "repositoryUrl", void 0);
exports.PersonalLinksSurveyDto = PersonalLinksSurveyDto;
class FillSurveyDto {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => TechnologiesSurveyDto),
    __metadata("design:type", TechnologiesSurveyDto)
], FillSurveyDto.prototype, "technologiesSurvey", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AboutYouSurveyDto),
    __metadata("design:type", AboutYouSurveyDto)
], FillSurveyDto.prototype, "aboutYouSurvey", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PersonalLinksSurveyDto),
    __metadata("design:type", PersonalLinksSurveyDto)
], FillSurveyDto.prototype, "personalLinksSurvey", void 0);
exports.FillSurveyDto = FillSurveyDto;
//# sourceMappingURL=FillSurvey.dto.js.map