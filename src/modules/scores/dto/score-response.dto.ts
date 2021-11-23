import { ScoreDocument } from '../score.entity';

export default class ScoreResponseDTO {
  constructor(
    public id: string,
    public playerName: string,
    public score: number,
    public creationDate: Date,
  ) {}

  static from = ({
    _id,
    playerName,
    score,
    endTime,
  }: ScoreDocument): ScoreResponseDTO =>
    new ScoreResponseDTO(_id.toHexString(), playerName, score, endTime);
}
