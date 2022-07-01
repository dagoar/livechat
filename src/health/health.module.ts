import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health.controller';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    MongooseModule.forRoot('mongodb://theroot:thepass@localhost:27017'),
  ],
  controllers: [HealthController],
})
export class HealthModule {}
