import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Score, ScoreSchema } from './score.entity';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { connectionName } from '../../mongoose-connection';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Score.name, schema: ScoreSchema }],
      connectionName,
    ),
  ],
  providers: [ScoresService],
  controllers: [ScoresController],
  exports: [],
})
export class ScoresModule {}
