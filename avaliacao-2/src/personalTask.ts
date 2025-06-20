import { Task } from "./task";

export class PersonalTask extends Task {
  complete(): string {
    return `Tarefa pessoal "${this.getDescription()}" ccom prioridade ${this.getPriority()} completada.`;
  }
}
