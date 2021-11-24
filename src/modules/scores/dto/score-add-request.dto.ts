import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export default class ScoreAddRequestDTO {
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  playerName: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsInt({ message: ValidationMessages.IS_NOT_NUMBER })
  score: number;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString({ message: ValidationMessages.IS_NOT_DATE })
  startTime: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString({ message: ValidationMessages.IS_NOT_DATE })
  endTime: string;

  _n?: number;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  _h: string;
}
