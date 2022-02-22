import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { JwtGeneratorCommand } from './jwtgenerator.command';
import { JwtService } from './jwt.service';

@Module({
  imports: [CommandModule],
  providers: [JwtGeneratorCommand, JwtService],
})
export class AppModule {}
