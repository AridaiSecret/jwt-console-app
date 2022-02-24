import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { JwtOptions } from './jwt.interface';
import { JwtGeneratorService } from './jwtgenerator.service';
import { JwtDecoderService } from './jwtdecoder.service';

@Command({ name: 'jwt', options: { isDefault: true } })
export class JwtCommand implements CommandRunner {
  constructor(
    private readonly inquirerService: InquirerService,
    private readonly jwtGenerator: JwtGeneratorService,
    private readonly jwtDecoder: JwtDecoderService,
  ) {}
  async run(
    _inputs: string[],
    options?: JwtOptions,
    generateJWT?: Record<string, string>,
    decodeJWT?: Record<string, string>,
  ): Promise<void> {
    options = await this.inquirerService.ask('jwt', options);
    if (options.mode === 'generatejwt') {
      generateJWT = await this.inquirerService.ask('jwtgenerator', generateJWT);
      console.log(
        this.jwtGenerator.GenerateJWT(
          generateJWT?.payload,
          generateJWT?.secret,
        ),
      );
    } else if (options.mode === 'decodejwt') {
      decodeJWT = await this.inquirerService.ask('jwtdecoder', decodeJWT);
      console.log(
        this.jwtDecoder.DecodeJWT(decodeJWT?.token, decodeJWT?.secret),
      );
    }
  }
}
