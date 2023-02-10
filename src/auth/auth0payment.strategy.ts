import { ForbiddenException, Injectable, Req } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import * as dotenv from 'dotenv';
import { auth0payload } from './dto/auth0Payload.dto';
import { UsersRepository } from '../db/repositories/users.repository';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
dotenv.config();

@Injectable()
export class Auth0PaymentStrategy extends PassportStrategy(
  Strategy,
  'auth0payment',
) {
  constructor(
    private usersRepository: UsersRepository,
    private surveysRepository: SurveyRepository,
  ) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `${process.env.AUTH0_ISSUER_URL}`,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: auth0payload) {
    console.log('auth0payload strategy');
    return payload;
  }
}
