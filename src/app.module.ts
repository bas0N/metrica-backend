import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    MongooseModule.forRoot(`${process.env.MONGO_DB_CONNECTION_STRING}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
