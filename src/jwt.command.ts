import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { JwtOptions } from './jwt.interface';
import { JwtGeneratorService } from './jwtgenerator.service';

@Command({ name: 'jwt', options: { isDefault: true } })
export class JwtCommand implements CommandRunner {
  constructor(private readonly inquirerService: InquirerService) {}
  async run(_inputs: string[], options?: JwtOptions): Promise<void> {
    options = await this.inquirerService.ask('jwt', options);
    if (options.mode === 'generatejwt') {
      const test = await this.inquirerService.ask('jwtgenerator', '');
    } else if (options.mode === 'decodejwt') {
    }
    console.log(options);
    console.log(test);
  }
}
