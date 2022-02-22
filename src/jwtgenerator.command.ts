import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { JwtService } from './jwt.service';

@Injectable()
export class JwtGeneratorCommand {
  constructor(private readonly jwtService: JwtService) {}

  @Command({
    command: 'generate-jwt:payload <payloadobject> secret <secret>',
    describe: 'Generate json web tokens.',
  })
  async create(
    @Positional({
      name: 'payloadobject',
      describe: 'Payload JSON object.',
      type: 'custom',
    })
    payload: string,
    @Option({
      name: 'secret',
      describe: 'Secret used for signing.',
      type: 'string',
      alias: 's',
      required: true,
    })
    secret: string,
  ) {
    this.jwtService.CreateJWT(payload, secret);
  }
}
