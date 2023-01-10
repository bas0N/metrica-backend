import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import * as dotenv from 'dotenv';
import { auth0payload } from './dto/auth0Payload.dto';
import { UsersRepository } from '../db/repositories/users.repository';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
dotenv.config();

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, 'auth0') {
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
    const user = await this.usersRepository.findUser(payload.email);
    if (!user) {
      const newUser = await this.usersRepository.addUser(payload.email);
      console.log('new user created: ', newUser);
    }
    console.log('user already existing: ', user);
    return payload;
  }
}
