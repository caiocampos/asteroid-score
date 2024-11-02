import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ScoreDocument } from './score.entity';
import ScoreResponseDTO from './dto/score-response.dto';
import ScoreAddRequestDTO from './dto/score-add-request.dto';
import { testHash } from '../../common/utils';

@Injectable()
export class ScoresService {
  private readonly logger = new Logger(ScoresService.name);

  constructor(@InjectModel('Score') private scoreModel: Model<ScoreDocument>) {}

  async findAll(playerName): Promise<Array<ScoreResponseDTO>> {
    try {
      let query = this.scoreModel.find();
      if (playerName) {
        query = query.where('playerName').regex(new RegExp(playerName, 'i'));
      }
      const scores = await query.sort('-score').exec();
      return scores.map(ScoreResponseDTO.from);
    } catch (error) {
      throw new HttpException(
        'Erro ao buscar as pontuações',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async count(): Promise<number> {
    try {
      return await this.scoreModel.countDocuments().exec();
    } catch (error) {
      throw new HttpException(
        'Erro ao contar as pontuações',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async add(requestDto: ScoreAddRequestDTO): Promise<ScoreResponseDTO> {
    if (!testHash(requestDto)) {
      throw new HttpException('O hash não é válido', HttpStatus.BAD_REQUEST);
    }
    try {
      const newScore = new this.scoreModel();
      newScore.playerName = requestDto.playerName;
      newScore.score = requestDto.score;
      newScore.startTime = new Date(requestDto.startTime);
      newScore.endTime = new Date(requestDto.endTime);
      newScore.difficulty = requestDto.difficulty;
      const score = await newScore.save();
      return ScoreResponseDTO.from(score);
    } catch (error) {
      throw new HttpException(
        'Erro ao gravar a pontuação',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
