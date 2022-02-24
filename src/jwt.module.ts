import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { JwtCommand } from './jwt.command';
import { JwtQuestion } from './jwt.question';
import { JwtGeneratorQuestion } from './jwt.generator.question';
import { JwtDecoderQuestion } from './jwt.decoder.question';
import { JwtGeneratorService } from './jwtgenerator.service';
import { JwtDecoderService } from './jwtdecoder.service';

@Module({
  imports: [CommandModule],
  providers: [
    JwtCommand,
    JwtQuestion,
    JwtGeneratorQuestion,
    JwtDecoderQuestion,
    JwtGeneratorService,
    JwtDecoderService,
  ],
})
export class JwtModule {}
