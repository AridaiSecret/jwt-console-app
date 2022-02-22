import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';

@Injectable()
export class JwtService {
  CreateJWT(payload: string, secret: string): void {
    try {
      console.log(payload);
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

      console.log(encodedHeader + '.' + encodedPayload + '.' + hash);
    } catch (error) {
      console.log(error);
    }
  }
}
