"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth0Strategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const jwks_rsa_1 = require("jwks-rsa");
const dotenv = __importStar(require("dotenv"));
const users_repository_1 = require("../db/repositories/users.repository");
const survey_repository_1 = require("../db/repositories/survey.repository");
dotenv.config();
let Auth0Strategy = class Auth0Strategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'auth0') {
    constructor(usersRepository, surveysRepository) {
        super({
            passReqToCallback: true,
            secretOrKeyProvider: (0, jwks_rsa_1.passportJwtSecret)({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
            }),
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: process.env.AUTH0_AUDIENCE,
            issuer: `${process.env.AUTH0_ISSUER_URL}`,
            algorithms: ['RS256'],
        });
        this.usersRepository = usersRepository;
        this.surveysRepository = surveysRepository;
    }
    async validate(req, payload) {
        const bearerToken = req.headers.authorization.slice(' ')[1];
        const user = await this.usersRepository.findUser(payload.email);
        if (!user) {
            console.log('add user in validate');
            const newUser = await this.usersRepository.addUser(payload.email, bearerToken);
            console.log('new user created: ', newUser);
            if (newUser.paymentNeeded) {
                throw new common_1.ForbiddenException('Payment needed.');
            }
        }
        if (user.nextPayment < new Date()) {
            const userFound = await this.usersRepository.setPaymentNeeded(payload.email, true);
            console.log(userFound);
            throw new common_1.ForbiddenException('Payment needed.');
        }
        if (user.paymentNeeded) {
            throw new common_1.ForbiddenException('Payment needed.');
        }
        return payload;
    }
};
Auth0Strategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        survey_repository_1.SurveyRepository])
], Auth0Strategy);
exports.Auth0Strategy = Auth0Strategy;
//# sourceMappingURL=auth0.strategy.js.map