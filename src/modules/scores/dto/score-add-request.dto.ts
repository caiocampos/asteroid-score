import { IsNotEmpty, IsInt, IsDateString, IsString, IsNumber, IsOptional } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export class ScoreAddRequestDTO {
  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  playerName!: string;

  @IsInt({ message: ValidationMessages.IS_NOT_NUMBER })
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  score!: number;

  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString({}, { message: ValidationMessages.IS_NOT_DATE })
  startTime!: string;

  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString({}, { message: ValidationMessages.IS_NOT_DATE })
  endTime!: string;

  @IsInt({ message: ValidationMessages.IS_NOT_NUMBER })
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  difficulty!: number;

  @IsNumber()
  @IsOptional()
  _n?: number;

  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  _h!: string;
}
