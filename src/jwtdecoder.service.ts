import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';

@Injectable()
export class JwtDecoderService {
  DecodeJWT(jwt: string, secret: string): string {
    const jwtParts = jwt.split('.');
    try {
      if (jwtParts.length !== 3) {
        throw new Error('Invalid JWT Token');
      }
      const header = Buffer.from(jwtParts[0], 'base64url').toString('utf-8');
      const payload = Buffer.from(jwtParts[1], 'base64url').toString('utf-8');
      const hash = createHmac('SHA256', secret)
        .update(jwtParts[0] + '.' + jwtParts[1])
        .digest('hex');
      const signatureHash = jwtParts[2];
      let result = 'Header:' + header + '\n' + 'Payload:' + payload + '\n';
      hash === signatureHash
        ? (result += 'Verified:Success')
        : (result += 'Verified:Failure');
      return result;
    } catch (e) {
      console.log(e.getMessage());
    }
  }
}
