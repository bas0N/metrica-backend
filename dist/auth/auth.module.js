"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("../users/users.module");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./jwt.strategy");
const users_service_1 = require("../users/users.service");
const users_repository_1 = require("../db/repositories/users.repository");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../db/schemas/user.schema");
const jwt_config_1 = require("../config/jwt.config");
const auth0_strategy_1 = require("./auth0.strategy");
const survey_repository_1 = require("../db/repositories/survey.repository");
const survey_schema_1 = require("../db/schemas/survey.schema");
const recrutiment_schema_1 = require("../db/schemas/recrutiment.schema");
const recruitment_repository_1 = require("../db/repositories/recruitment.repository");
const auth0payment_strategy_1 = require("./auth0payment.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: survey_schema_1.Survey.name, schema: survey_schema_1.SurveySchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: recrutiment_schema_1.Recruitment.name, schema: recrutiment_schema_1.RecruitmentSchema },
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'auth0' }),
            users_module_1.UsersModule,
            jwt_1.JwtModule.registerAsync(jwt_config_1.jwtConfig),
        ],
        providers: [
            auth0_strategy_1.Auth0Strategy,
            jwt_strategy_1.JwtStrategy,
            users_service_1.UsersService,
            auth_service_1.AuthService,
            users_repository_1.UsersRepository,
            auth0payment_strategy_1.Auth0PaymentStrategy,
            recruitment_repository_1.RecruitmentRepository,
            survey_repository_1.SurveyRepository,
        ],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map