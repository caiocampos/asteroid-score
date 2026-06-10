import { IsNotEmpty, IsInt, IsDateString } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export default class ScoreAddRequestDTO {
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  playerName: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsInt({ message: ValidationMessages.IS_NOT_NUMBER })
  score: number;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString({}, { message: ValidationMessages.IS_NOT_DATE })
  startTime: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsDateString({}, { message: ValidationMessages.IS_NOT_DATE })
  endTime: string;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  @IsInt({ message: ValidationMessages.IS_NOT_NUMBER })
  difficulty: number;

  _n?: number;

  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  _h: string;

  public constructor(
    playerName: string,
    score: number,
    startTime: string,
    endTime: string,
    difficulty: number,
    _h: string,
    _n?: number,
  ) {
    this.playerName = playerName;
    this.score = score;
    this.startTime = startTime;
    this.endTime = endTime;
    this.difficulty = difficulty;
    this._h = _h;
    this._n = _n;
  }
}
