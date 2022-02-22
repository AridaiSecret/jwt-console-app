import { Command, Positional, Option } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { JwtDecoderService } from './jwtdecoder.service';

@Injectable()
export class JwtDecoderCommand {
  constructor(private readonly jwtDecoder: JwtDecoderService) {}

  @Command({
    command: 'decode-jwt:token <jwt> secret <secret>',
    describe: 'Decode json web tokens.',
  })
  async create(
    @Positional({
      name: 'jwt',
      describe: 'JSON web token to be decoded.',
      type: 'string',
    })
    jwt: string,
    @Option({
      name: 'secret',
      describe: 'Secret used for signature verification.',
      type: 'string',
      alias: 's',
      required: true,
    })
    secret: string,
  ) {
    this.jwtDecoder.DecodeJWT(jwt, secret);
  }
}
