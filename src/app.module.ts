import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { JwtGeneratorCommand } from './jwtgenerator.command';
import { JwtGeneratorService } from './jwtgenerator.service';
import { JwtDecoderCommand } from './jwtdecoder.command';
import { JwtDecoderService } from './jwtdecoder.service';

@Module({
  imports: [CommandModule],
  providers: [
    JwtGeneratorCommand,
    JwtGeneratorService,
    JwtDecoderCommand,
    JwtDecoderService,
  ],
})
export class AppModule {}
