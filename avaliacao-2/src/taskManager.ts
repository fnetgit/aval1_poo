import { TaskContract } from "./taskContract";

export class TaskManager<T extends TaskContract> {
  private tasks = new Map<string, T>();

  addTask(task: T): void {
    if (this.tasks.has(task.getDescription())) {
      throw new Error(
        `Tarefa com a descrição "${task.getDescription()}" já existe.`
      );
    }
    this.tasks.set(task.getDescription(), task);
  }

  listByPriority(): T[] {
    return Array.from(this.tasks.values()).sort(
      (a, b) => a.getPriority() - b.getPriority()
    );
  }

  filterByPriority(priority: number): T[] {
    return Array.from(this.tasks.values()).filter(
      (task) => task.getPriority() === priority
    );
  }

  searchByDescription(description: string): T[] {
    return Array.from(this.tasks.values()).filter((task) =>
      task.getDescription().includes(description)
    );
  }
}
