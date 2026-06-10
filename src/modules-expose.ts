import { DynamicModule, ForwardReference, Type } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoresModule } from './modules/scores/scores.module';
import { connectionName } from './mongoose-connection';
import { forceString } from './common/utils';

export const moduleList: (
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>
)[] = [
  MongooseModule.forRoot(
    forceString(process.env.MONGO_URI_SCORE ?? process.env.MONGO_URI),
    {
      connectionName,
    },
  ),
  ScoresModule,
];
