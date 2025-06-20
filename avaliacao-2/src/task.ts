import { TaskContract } from "./taskContract";

export abstract class Task implements TaskContract {
  private description: string;
  protected priority: number;

  constructor(description: string, priority: number) {
    this.description = description;
    this.priority = priority;
  }

  getDescription(): string {
    return this.description;
  }

  getPriority(): number {
    return this.priority;
  }

  abstract complete(): string;
}
