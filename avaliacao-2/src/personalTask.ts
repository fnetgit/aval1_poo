import { Task } from "./task";

export class PersonalTask extends Task {
  constructor(description: string, priority: number) {
    super(description, priority);
  }

  override complete(): string {
    super.complete();
    return `Tarefa pessoal '${this.description}' (Prioridade: ${this.priority}) foi completada com sucesso`;
  }
}
