import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
