export interface TaskContract {
  description: string;
  priority: number;
  isCompleted: boolean;

  complete(): string;
}
