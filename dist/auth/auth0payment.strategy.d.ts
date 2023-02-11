import { Strategy } from 'passport-jwt';
import { auth0payload } from './dto/auth0Payload.dto';
import { UsersRepository } from '../db/repositories/users.repository';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
declare const Auth0PaymentStrategy_base: new (...args: any[]) => Strategy;
export declare class Auth0PaymentStrategy extends Auth0PaymentStrategy_base {
    private usersRepository;
    private surveysRepository;
    constructor(usersRepository: UsersRepository, surveysRepository: SurveyRepository);
    validate(payload: auth0payload): Promise<auth0payload>;
}
export {};
