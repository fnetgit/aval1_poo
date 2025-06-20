import { Task } from "./task";

export class WorkTask extends Task {
  complete(): string {
    return `Tarefa de trabalho "${this.getDescription()}" com prioridade ${this.getPriority()} completada.`;
  }
}
