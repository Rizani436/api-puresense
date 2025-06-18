import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { StringifyOptions } from 'node:querystring';

export class CreatePureSenseDto {

  @IsOptional()
  id: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}

export class UpdatePureSenseDto {
  @IsOptional()
  @IsString()
  status?: string;
}
