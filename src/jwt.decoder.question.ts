import { Question, QuestionSet, ValidateFor } from 'nest-commander';

@QuestionSet({ name: 'jwtdecoder' })
export class JwtDecoderQuestion {
  @Question({
    type: 'input',
    name: 'token',
    message: 'Please write the token',
  })
  parseToken(val: string) {
    return val;
  }

  @ValidateFor({ name: 'token' })
  validatePayload(value: string) {
    const tokenParts = value.split('.');
    if (tokenParts.length !== 3) {
      return 'Please introduce a valid JWT token';
    } else {
      return true;
    }
  }

  @Question({
    type: 'input',
    name: 'secret',
    message: 'Please write your secret',
  })
  parseSecret(val: string) {
    return val;
  }
}
