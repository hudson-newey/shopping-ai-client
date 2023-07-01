export interface IChat {
  prompts: string[];
  responses: string[];
}

export class Chat implements IChat {
  public constructor(
    private _prompts: string[],
    private _responses: string[]
  ) {
    this.prompts = _prompts;
    this.responses = _responses;
  }

  public prompts: string[];
  public responses: string[];
}
