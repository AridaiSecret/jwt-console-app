import { Question, QuestionSet, ValidateFor } from 'nest-commander';

@QuestionSet({ name: 'jwtgenerator' })
export class JwtGeneratorQuestion {
  @Question({
    type: 'input',
    name: 'payload',
    message: 'Please write the payload as a json object',
  })
  parsePayload(val: string) {
    return val;
  }

  @ValidateFor({ name: 'payload' })
  validatePayload(value: string) {
    const payloadObject = JSON.parse(value);
    if (payloadObject) {
      return true;
    } else {
      return 'Please introduce a valid JSON object';
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
