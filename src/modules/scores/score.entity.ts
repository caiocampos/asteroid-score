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
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
