"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyModule = void 0;
const common_1 = require("@nestjs/common");
const survey_service_1 = require("./survey.service");
const survey_controller_1 = require("./survey.controller");
const mongoose_1 = require("@nestjs/mongoose");
const survey_schema_1 = require("../db/schemas/survey.schema");
const survey_repository_1 = require("../db/repositories/survey.repository");
const users_repository_1 = require("../db/repositories/users.repository");
const user_schema_1 = require("../db/schemas/user.schema");
const recrutiment_schema_1 = require("../db/schemas/recrutiment.schema");
const recruitment_repository_1 = require("../db/repositories/recruitment.repository");
let SurveyModule = class SurveyModule {
};
SurveyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: survey_schema_1.Survey.name, schema: survey_schema_1.SurveySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: recrutiment_schema_1.Recruitment.name, schema: recrutiment_schema_1.RecruitmentSchema },
            ]),
        ],
        providers: [
            survey_service_1.SurveyService,
            survey_repository_1.SurveyRepository,
            users_repository_1.UsersRepository,
            recruitment_repository_1.RecruitmentRepository,
        ],
        controllers: [survey_controller_1.SurveyController],
    })
], SurveyModule);
exports.SurveyModule = SurveyModule;
//# sourceMappingURL=survey.module.js.map