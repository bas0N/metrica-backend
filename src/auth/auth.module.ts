import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/repositories/users.repository';
@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '1h' },
    }),
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
