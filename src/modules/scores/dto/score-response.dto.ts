import { ScoreDocument } from '../score.entity';

export default class ScoreResponseDTO {
  constructor(
    public id: string,
    public playerName: string,
    public score: number,
    public creationDate: Date,
    public difficulty: number,
  ) {}

  static from = ({
    _id,
    playerName,
    score,
    endTime,
    difficulty,
  }: ScoreDocument): ScoreResponseDTO =>
    new ScoreResponseDTO(
      _id.toHexString(),
      playerName,
      score,
      endTime,
      difficulty,
    );
}
