import { TaskManager } from "./taskManager";
import { PersonalTask } from "./personalTask";
import { WorkTask } from "./workTask";

const taskManager = new TaskManager<PersonalTask>();

let workTask1 = new WorkTask("Reunião com grupo do trabalho do Átila", 2);
let workTask2 = new WorkTask("Fazer atividade do Baluz", 3);
let personalTask1 = new PersonalTask("Limpar cozinha", 1);
let personalTask2 = new PersonalTask("Limpar quarto", 1);

taskManager.addTask(workTask1);
taskManager.addTask(workTask2);
taskManager.addTask(personalTask1);
taskManager.addTask(personalTask2);

console.log("Listando tarefas por ordem de prioridade");
taskManager.listByPriority().forEach(task => console.log(task.getPriority(), task.getDescription()));

console.log("-".repeat(30));

console.log("Buscando tarefas por descrição");
taskManager.searchByDescription("Limpar quarto").forEach(task => console.log(task.getPriority(), task.getDescription()));

console.log("-".repeat(30));

console.log("Buscando tarefas por prioridade específica");
taskManager.filterByPriority(1).forEach(task => console.log(task.getPriority(), task.getDescription()));

console.log("-".repeat(30));

console.log(workTask1.complete());
console.log(personalTask1.complete());
