import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';

@Injectable()
export class JwtDecoderService {
  DecodeJWT(jwt: string, secret: string): void {
    const jwtParts = jwt.split('.');
    if (jwtParts.length === 3) {
      const header = Buffer.from(jwtParts[0], 'base64url').toString('utf-8');
      const payload = Buffer.from(jwtParts[1], 'base64url').toString('utf-8');
      const hash = createHmac('SHA256', secret)
        .update(jwtParts[0] + '.' + jwtParts[1])
        .digest('hex');
      const signatureHash = jwtParts[2];
      console.log('Header:' + header);
      console.log('Payload:' + payload);
      hash === signatureHash
        ? console.log('Verified:Success')
        : console.log('Verified:Failure');
    }
  }
}
