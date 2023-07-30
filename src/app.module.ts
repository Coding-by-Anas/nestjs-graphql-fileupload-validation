import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule { }
