import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateSensorDto {
  @IsOptional()
  id: string;
  @IsNotEmpty()
  @IsString()
  puresenseId: string;
  @IsNotEmpty()
  @IsNumber()
  voltage: number;

  @IsNotEmpty()
  @IsNumber()
  analogReadValue: number;

  @IsNotEmpty()
  @IsNumber()
  digitalReadValue: number;

  @IsNotEmpty()
  @IsNumber()
  NTU: number;

  @IsNotEmpty()
  @IsString()
  statusKejernihan: string;
}

export class UpdateSensorDto {
  @IsOptional()
  @IsString()
  puresenseId?: string;
  @IsOptional()
  @IsNumber()
  voltage?: number;

  @IsOptional()
  @IsNumber()
  analogReadValue?: number;

  @IsOptional()
  @IsNumber()
  digitalReadValue?: number;

  @IsOptional()
  @IsNumber()
  NTU?: number;

  @IsOptional()
  @IsString()
  statusKejernihan?: string;
}
