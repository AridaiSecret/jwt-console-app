import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { JwtCommand } from './jwt.command';
import { JwtQuestion } from './jwt.question';
import { JwtGeneratorQuestion } from './jwt.generator.question';
import { JwtDecoderQuestion } from './jwt.decoder.question';

@Module({
  imports: [CommandModule],
  providers: [
    JwtCommand,
    JwtQuestion,
    JwtGeneratorQuestion,
    JwtDecoderQuestion,
  ],
})
export class JwtModule {}
