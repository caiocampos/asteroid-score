import { DynamicModule, ForwardReference, Type } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoresModule } from './modules/scores/scores.module';
import { connectionName } from './mongoose-connection';

export const moduleList: (
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>
)[] = [
  MongooseModule.forRoot(process.env.MONGO_URI_SCORE ?? process.env.MONGO_URI, {
    connectionName,
  }),
  ScoresModule,
];
