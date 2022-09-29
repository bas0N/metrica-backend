import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/db/schemas/user.schema';
import { jwtConfig } from 'src/config/jwt.config';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    UsersModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  providers: [
    LocalStrategy,
    JwtStrategy,
    UsersService,
    AuthService,
    UsersRepository,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
