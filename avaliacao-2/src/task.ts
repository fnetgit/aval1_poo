import { TaskContract } from "./taskContract";

export abstract class Task implements TaskContract {
  private _isCompleted: boolean = false;
  constructor(private _description: string, protected _priority: number) { }

  public get description(): string {
    return this._description;
  }

  public get priority(): number {
    return this._priority;
  }

  public get isCompleted(): boolean {
    return this._isCompleted;
  }

  public complete(): string {
    this._isCompleted = true;
    return `Tarefa '${this.description}' foi completada.`;
  }
}
