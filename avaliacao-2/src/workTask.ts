import { Task } from "./task";

export class WorkTask extends Task {
  constructor(description: string, priority: number) {
    super(description, priority);
  }

  override complete(): string {
    super.complete();
    return `Tarefa de trabalho '${this.description}' (Prioridade: ${this.priority}) foi arquivada como concluída.`;
  }
}
