interface IUser {
  username: string;
};

export class User implements IUser {
  public constructor(username: string) {
    this.username = username;
  }

  public username: string;
};
