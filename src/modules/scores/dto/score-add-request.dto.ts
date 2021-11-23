import { IsNotEmpty, IsInt, IsDate } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export default class ScoreAddRequestDTO {
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  playerName: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsInt({ message: ValidationMessages.IS_NOT_NUMBER })
  score: number;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDate({ message: ValidationMessages.IS_NOT_DATE })
  startTime: Date;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDate({ message: ValidationMessages.IS_NOT_DATE })
  endTime: Date;

  _n?: number;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  _h: string;
}
