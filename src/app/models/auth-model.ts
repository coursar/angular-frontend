export class AuthModel {
  static ROLE_ANONYMOUS = 'ROLE_ANONYMOUS';
  static ANONYMOUS = Object.freeze(new AuthModel(
    -1,
    'anonymous',
    '',
    Object.freeze([AuthModel.ROLE_ANONYMOUS]) as string[],
  ));

  constructor(
    public id: number,
    public username: string,
    public token: string,
    public roles: string[],
  ) {
  }
}
