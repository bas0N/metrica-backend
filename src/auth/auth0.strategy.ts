import { ForbiddenException, Injectable } from '@nestjs/common';
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
      passReqToCallback: true,
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

  async validate(req: any, payload: auth0payload) {
    const bearerToken = req.headers.authorization.slice(' ')[1];
    const user = await this.usersRepository.findUser(payload.email);
    if (!user) {
      console.log('add user in validate');
      const newUser = await this.usersRepository.addUser(
        payload.email,
        bearerToken,
      );
      console.log('new user created: ', newUser);
      if (newUser.paymentNeeded) {
        throw new ForbiddenException('Payment needed.');
      }
    }
    // console.log(payload);
    // if (payload.sub.split('|')[0] != 'auth0') {
    //   const response = await fetch('https://stack-met.eu.auth0.com/userinfo', {
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${bearerToken}`,
    //     },
    //   });
    //   const useros = await response.json();
    //   console.log('useros');
    //   //add user info
    // }

    //console.log('user already existing: ', user);
    //check the payment due date
    if (user.nextPayment < new Date()) {
      //set paymentNeeded to true
      const userFound = await this.usersRepository.setPaymentNeeded(
        payload.email,
        true,
      );
      console.log(userFound);
      throw new ForbiddenException('Payment needed.');
    }
    if (user.paymentNeeded) {
      throw new ForbiddenException('Payment needed.');
    }
    return payload;
  }
}
