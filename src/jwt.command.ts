import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { JwtOptions } from './jwt.interface';
import { JwtGeneratorService } from './jwtgenerator.service';
import { JwtDecoderService } from './jwtdecoder.service';

@Command({ name: 'jwt', options: { isDefault: true } })
export class JwtCommand implements CommandRunner {
  constructor(private readonly inquirerService: InquirerService) {}
  async run(
    _inputs: string[],
    options?: JwtOptions,
    generateJWT?: Record<string, string>,
    decodeJWT?: Record<string, string>,
  ): Promise<void> {
    options = await this.inquirerService.ask('jwt', options);
    if (options.mode === 'generatejwt') {
      generateJWT = await this.inquirerService.ask('jwtgenerator', generateJWT);
      const jwtGenerator = new JwtGeneratorService();
      jwtGenerator.CreateJWT(generateJWT?.payload, generateJWT?.secret);
    } else if (options.mode === 'decodejwt') {
      decodeJWT = await this.inquirerService.ask('jwtdecoder', decodeJWT);
      const jwtDecoder = new JwtDecoderService();
      jwtDecoder.DecodeJWT(decodeJWT?.token, decodeJWT?.secret);
    }
  }
}
