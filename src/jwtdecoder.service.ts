import { Injectable } from '@nestjs/common';
import { createHmac, sign } from 'crypto';

@Injectable()
export class JwtDecoderService {
  DecodeJWT(jwt: string, secret: string): void {
    const jwtParts = jwt.split('.');
    if (jwtParts.length === 3) {
      const header = Buffer.from(jwtParts[0], 'base64url').toString('utf-8');
      const payload = Buffer.from(jwtParts[1], 'base64url').toString('utf-8');
      const signature = Buffer.from(jwtParts[2], 'base64url').toString('utf-8');
      console.log(header, payload, signature);
    }
  }
}
