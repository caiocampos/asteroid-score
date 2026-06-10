import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ScoreDocument = Score & Document<Types.ObjectId>;

@Schema({ collection: 'scores' })
export class Score {
  @Prop({ required: true, type: String })
  playerName: string;

  @Prop({ required: true, type: Number })
  score: number;

  @Prop({ required: true, type: Date })
  startTime: Date;

  @Prop({ required: true, type: Date })
  endTime: Date;

  @Prop({ required: true, type: Number })
  difficulty: number;

  public constructor(
    playerName: string,
    score: number,
    startTime: Date,
    endTime: Date,
    difficulty: number,
  ) {
    this.playerName = playerName;
    this.score = score;
    this.startTime = startTime;
    this.endTime = endTime;
    this.difficulty = difficulty;
  }
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
