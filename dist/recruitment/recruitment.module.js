"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecruitmentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const recruitment_repository_1 = require("../db/repositories/recruitment.repository");
const recrutiment_schema_1 = require("../db/schemas/recrutiment.schema");
const recruitment_controller_1 = require("./recruitment.controller");
const recruitment_service_1 = require("./recruitment.service");
let RecruitmentModule = class RecruitmentModule {
};
RecruitmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: recrutiment_schema_1.Recruitment.name, schema: recrutiment_schema_1.RecruitmentSchema },
            ]),
        ],
        providers: [recruitment_service_1.RecruitmentService, recruitment_repository_1.RecruitmentRepository],
        controllers: [recruitment_controller_1.RecruitmentController],
    })
], RecruitmentModule);
exports.RecruitmentModule = RecruitmentModule;
//# sourceMappingURL=recruitment.module.js.map