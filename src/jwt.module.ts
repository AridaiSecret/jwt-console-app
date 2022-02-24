import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { JwtCommand } from './Commands/jwt.command';
import { JwtQuestion } from './Commands/Questions/jwt.question';
import { JwtGeneratorQuestion } from './Commands/Questions/jwt.generator.question';
import { JwtDecoderQuestion } from './Commands/Questions/jwt.decoder.question';
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
