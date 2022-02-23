import { Question, QuestionSet, ValidateFor, WhenFor } from 'nest-commander';

@QuestionSet({ name: 'jwt' })
export class JwtQuestion {
  mode = '';
  @Question({
    type: 'expand',
    name: 'mode',
    message: 'Do you want to generate or decode?',
    choices: [
      {
        key: 'g',
        name: 'Generate JWT',
        value: 'generatejwt',
      },
      {
        key: 'd',
        name: 'Decode JWT',
        value: 'decodejwt',
      },
    ],
  })
  selectMode(val: string) {
    return val;
  }

  @Question({
    type: 'confirm',
    name: 'isSecretNeeded',
    message: 'Will you use a Secret?',
    default: false,
  })
  parseisSecretNeeded(val: boolean) {
    return val;
  }
}
