import { TaskContract } from "./taskContract";

export class TaskManager<T extends TaskContract> {
  private tasks: T[] = [];
  constructor() { }

  addTask(task: T) {
    this.tasks.push(task);
  }

  completeTask(description: string): string {
    const task = this.tasks.find((task) => task.description === description);

    if (!task) {
      return `Tarefa com a descrição "${description}" não foi encontrada.`;
    }

    if (task.isCompleted) {
      return `Tarefa "${description}" já havia sido completada anteriormente.`;
    }

    return task.complete();
  }

  listCompletedTasks(): T[] {
    return this.tasks.filter((task) => task.isCompleted);
  }

  listByPriority(): T[] {
    const activeTasks = this.tasks.filter((task) => !task.isCompleted);
    activeTasks.sort((a, b) => a.priority - b.priority);
    return activeTasks;
  }

  filterByPriority(priority: number): T[] {
    const activeTasks = this.tasks.filter((task) => !task.isCompleted);

    const filteredTasks = activeTasks.filter(
      (task) => task.priority === priority
    );
    return filteredTasks;
  }

  searchByDescription(searchTerm: string): T[] {
    const activeTasks = this.tasks.filter((task) => !task.isCompleted);

    const foundTasks = activeTasks.filter((task) => {
      const taskDescription = task.description.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return taskDescription.includes(searchTermLower);
    });
    return foundTasks;
  }
}
