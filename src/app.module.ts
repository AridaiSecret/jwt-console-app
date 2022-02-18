import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { UserCommand } from './user.command';
import { JwtService } from './jwt.service';

@Module({
  imports: [CommandModule],
  providers: [UserCommand, JwtService],
})
export class AppModule {}
