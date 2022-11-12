import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecruitmentRepository } from 'src/db/repositories/recruitment.repository';
import { UsersRepository } from 'src/db/repositories/users.repository';
import {
  Recruitment,
  RecruitmentSchema,
} from 'src/db/schemas/recrutiment.schema';
import { User, UserSchema } from 'src/db/schemas/user.schema';
import { RecruitmentController } from './recruitment.controller';
import { RecruitmentService } from './recruitment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Recruitment.name, schema: RecruitmentSchema },
    ]),
  ],
  providers: [RecruitmentService, RecruitmentRepository],
  controllers: [RecruitmentController],
})
export class RecruitmentModule {}
