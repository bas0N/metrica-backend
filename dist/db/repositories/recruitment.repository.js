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
exports.RecruitmentRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const recrutiment_schema_1 = require("../schemas/recrutiment.schema");
let RecruitmentRepository = class RecruitmentRepository {
    constructor(recruitmentModel) {
        this.recruitmentModel = recruitmentModel;
    }
    async findRecruitment(recruitmentId) {
        const recruitment = await this.recruitmentModel.findById(recruitmentId);
        return recruitment;
    }
    async editRecruitmentProcess(editRecruitmentData) {
        const { recruitmenDbtId, recruitmentInternalId, recruitmentDescription, recruitmentName, } = editRecruitmentData;
        try {
            const recruitment = await this.recruitmentModel.findByIdAndUpdate(recruitmenDbtId, {
                recruitmentId: recruitmentInternalId,
                recruitmentName: recruitmentName,
                recruitmentDescription: recruitmentDescription,
            });
            if (!recruitment) {
                throw new common_1.BadRequestException();
            }
            return recruitment;
        }
        catch (e) {
            throw new common_1.InternalServerErrorException(e.message);
            console.log(e);
        }
    }
    async addRecruitment(email, addRecruitmentDto) {
        const recruitment = {};
        console.log(email);
        const newRecruitment = new this.recruitmentModel(Object.assign({ creatorEmail: email }, addRecruitmentDto));
        return newRecruitment.save();
    }
    async getAllRecruitments(email) {
        try {
            const recruitments = await this.recruitmentModel.find({
                creatorEmail: email,
            });
            return recruitments;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException(err);
        }
    }
    async editRecruitment() { }
    async deleteRecruitment(recruitmentId) {
        try {
            const recruitment = await this.recruitmentModel.findByIdAndDelete(recruitmentId);
            if (!recruitment) {
                throw new common_1.BadRequestException();
            }
            return recruitment;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('Recruitment does not exist.');
        }
    }
};
RecruitmentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(recrutiment_schema_1.Recruitment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecruitmentRepository);
exports.RecruitmentRepository = RecruitmentRepository;
//# sourceMappingURL=recruitment.repository.js.map