import { Test, TestingModule } from '@nestjs/testing';
import { CommandModule } from 'nestjs-command';
import { JwtCommand } from './jwt.command';
import { JwtDecoderQuestion } from './jwt.decoder.question';
import { JwtGeneratorQuestion } from './jwt.generator.question';
import { JwtQuestion } from './jwt.question';
import { JwtDecoderService } from './jwtdecoder.service';
import { JwtGeneratorService } from './jwtgenerator.service';

describe('JWT Services', () => {
  let jwtGenerator: JwtGeneratorService;
  let jwtDecoder: JwtDecoderService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CommandModule],
      providers: [
        {
          provide: JwtGeneratorService,
          useValue: {
            GenerateJWT: jest.fn(),
          },
        },
        {
          provide: JwtDecoderService,
          useValue: {
            DecodeJWT: jest.fn(),
          },
        },
      ],
    }).compile();

    jwtGenerator = app.get<JwtGeneratorService>(JwtGeneratorService);
    jwtDecoder = app.get<JwtDecoderService>(JwtDecoderService);
  });

  describe('JwtGeneratorService', () => {
    it('GenerateJWT method should be defined"', () => {
      expect(jwtGenerator.GenerateJWT).toBeDefined();
    });

    it('GenerateJWT should receive a payload and a secret"', () => {
      const payload = '{"test":"test"}';
      const secret = 'test';
      const createJWT = jest.spyOn(jwtGenerator, 'GenerateJWT');

      jwtGenerator.GenerateJWT(payload, secret);
      expect(createJWT).toHaveBeenCalledWith(payload, secret);
    });
  });

  describe('JwtDecoderService', () => {
    it('DecodeJWT method should be defined"', () => {
      expect(jwtDecoder.DecodeJWT).toBeDefined();
    });

    it('DecodeJWT should receive a token and a secret"', () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0IjoidGVzdCJ9.MZZ7UbJRJH9hFRdBUQHpMjU4TK4XRrYP5UxcAkEHvxE';
      const secret = 'test';
      const decodeJWT = jest.spyOn(jwtDecoder, 'DecodeJWT');

      jwtDecoder.DecodeJWT(token, secret);
      expect(decodeJWT).toHaveBeenCalledWith(token, secret);
    });
  });
});
