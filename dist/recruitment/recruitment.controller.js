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
exports.RecruitmentController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../auth/get-user.decorator");
const AddRecruitment_dto_1 = require("./dto/AddRecruitment.dto");
const EditRecruitment_dto_1 = require("./dto/EditRecruitment.dto");
const recruitment_service_1 = require("./recruitment.service");
let RecruitmentController = class RecruitmentController {
    constructor(recruitmentService) {
        this.recruitmentService = recruitmentService;
    }
    addRecruitmentProcess(email, addRecruitmentDto) {
        console.log(addRecruitmentDto);
        return this.recruitmentService.addRecruitmentProcess(email, addRecruitmentDto);
    }
    getAllRecruitments(email) {
        return this.recruitmentService.getAllRecruitments(email);
    }
    editRecruitmentProcess(editRecruitmentData) {
        return this.recruitmentService.editRecruitmentProcess(editRecruitmentData);
    }
    deleteRecruitment(recruitmentId) {
        return this.recruitmentService.deleteRecruitment(recruitmentId);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('auth0')),
    (0, common_1.Post)('addRecruitment'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AddRecruitment_dto_1.AddRecruitmentDto]),
    __metadata("design:returntype", void 0)
], RecruitmentController.prototype, "addRecruitmentProcess", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('auth0')),
    (0, common_1.Get)('getAllRecruitments'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecruitmentController.prototype, "getAllRecruitments", null);
__decorate([
    (0, common_1.Put)('editRecruitment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EditRecruitment_dto_1.EditRecruitmentDto]),
    __metadata("design:returntype", void 0)
], RecruitmentController.prototype, "editRecruitmentProcess", null);
__decorate([
    (0, common_1.Delete)('deleteRecruitment/:recruitmentId'),
    __param(0, (0, common_1.Param)('recruitmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecruitmentController.prototype, "deleteRecruitment", null);
RecruitmentController = __decorate([
    (0, common_1.Controller)('recruitment'),
    __metadata("design:paramtypes", [recruitment_service_1.RecruitmentService])
], RecruitmentController);
exports.RecruitmentController = RecruitmentController;
//# sourceMappingURL=recruitment.controller.js.map