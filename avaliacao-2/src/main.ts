import { PersonalTask } from "./personalTask";
import { TaskManager } from "./taskManager";
import { WorkTask } from "./workTask";
import { TaskContract } from "./taskContract";

function displayTasksByPriority(manager: TaskManager<TaskContract>) {
    console.log("--- Lista de Tarefas por Prioridade ---");
    const tasks = manager.listByPriority();

    if (tasks.length === 0) {
        console.log("Nenhuma tarefa ativa para listar.");
        return;
    }

    tasks.forEach((task) => {
        console.log(`Prioridade: ${task.priority} - ${task.description}`);
    });
}

function displayTaskList(title: string, tasks: TaskContract[]) {
    console.log(title);

    if (tasks.length === 0) {
        console.log("Nenhuma tarefa encontrada para esta categoria.");
        return;
    }

    tasks.forEach((task) => {
        console.log(task.description);
    });
}


const taskManager = new TaskManager<PersonalTask | WorkTask>();

taskManager.addTask(new WorkTask("Estudar para a prova do Átila", 2));
taskManager.addTask(new PersonalTask("Limpar quarto", 2));
taskManager.addTask(new PersonalTask("Limpar cozinha", 1));
taskManager.addTask(new PersonalTask("Passar roupas", 1));
taskManager.addTask(new WorkTask("Fazer trabalho do Baluz", 3));
taskManager.addTask(new WorkTask("Fazer trabalho interdisciplinar", 3));

displayTasksByPriority(taskManager);

const completionMessage = taskManager.completeTask("Limpar cozinha");
console.log(`\n${completionMessage}\n`);

displayTasksByPriority(taskManager);

const priority3Tasks = taskManager.filterByPriority(3);
displayTaskList("\n--- Filtrando Tarefas com Prioridade ---", priority3Tasks);

const foundTasks = taskManager.searchByDescription("limpar");
displayTaskList("\n--- Buscando por descrição específica ---", foundTasks);

const completedTasks = taskManager.listCompletedTasks();
displayTaskList("\n--- Lista de Tarefas Concluídas ---", completedTasks);