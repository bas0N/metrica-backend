import { Strategy } from 'passport-jwt';
import { auth0payload } from './dto/auth0Payload.dto';
import { UsersRepository } from '../db/repositories/users.repository';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
declare const Auth0Strategy_base: new (...args: any[]) => Strategy;
export declare class Auth0Strategy extends Auth0Strategy_base {
    private usersRepository;
    private surveysRepository;
    constructor(usersRepository: UsersRepository, surveysRepository: SurveyRepository);
    validate(req: any, payload: auth0payload): Promise<auth0payload>;
}
export {};
