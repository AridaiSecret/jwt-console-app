import { CommandFactory } from 'nest-commander';
import { JwtModule } from './jwt.module';

const bootstrap = async () => {
  await CommandFactory.run(JwtModule);
};

bootstrap();
