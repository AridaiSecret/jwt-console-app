import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';

@Injectable()
export class JwtGeneratorService {
  GenerateJWT(payload: string, secret: string): string {
    try {
      const encodedHeader = Buffer.from(
        JSON.stringify({
          alg: 'HS256',
          typ: 'JWT',
        }),
      ).toString('base64url');

      const objectPayload = JSON.parse(payload);

      const encodedPayload = Buffer.from(
        JSON.stringify(objectPayload),
      ).toString('base64url');

      const hash = createHmac('sha256', secret)
        .update(encodedHeader + '.' + encodedPayload)
        .digest('hex');

      return encodedHeader + '.' + encodedPayload + '.' + hash;
    } catch (e) {
      console.log(e.getMessage());
    }
  }
}
