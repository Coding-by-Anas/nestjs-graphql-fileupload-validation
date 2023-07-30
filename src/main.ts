import { NestFactory } from '@nestjs/core';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());
  app.use(
    '/graphql',
    graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 10 }),
  );

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: false,
  //     transform: false
  //   })
  // )
  await app.listen(3000);
}
bootstrap();
