import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ScoresService } from './scores.service';
import ScoreResponseDTO from './dto/score-response.dto';
import ScoreAddRequestDTO from './dto/score-add-request.dto';

@Controller('score')
export class ScoresController {
  constructor(private scoresService: ScoresService) {}

  @Get()
  findAll(
    @Query('playerName') playerName: string,
  ): Promise<Array<ScoreResponseDTO>> {
    return this.scoresService.findAll(playerName);
  }

  @Get('count')
  count(): Promise<number> {
    return this.scoresService.count();
  }

  @Post()
  add(@Body() requestDto: ScoreAddRequestDTO): Promise<ScoreResponseDTO> {
    return this.scoresService.add(requestDto);
  }
}
