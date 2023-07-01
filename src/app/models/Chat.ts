export interface IChat {
  id: number;
  prompts: string[];
  responses: string[];
}

export class Chat implements IChat {
  public constructor(
    private _id: number,
    private _prompts: string[],
    private _responses: string[]
  ) {
    this.id = _id;
    this.prompts = _prompts;
    this.responses = _responses;
  }

  public id: number;
  public prompts: string[];
  public responses: string[];
}
