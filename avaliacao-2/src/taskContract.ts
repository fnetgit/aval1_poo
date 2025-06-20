export interface TaskContract {
  complete(): string;
  getDescription(): string;
  getPriority(): number;
}
