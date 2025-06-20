# 2ª Avaliação de POO

## Lista de Tarefas com Priorização e Busca

### Implemente um gerenciador de tarefas com prioridade e filtragem

* Interface ```TaskContract```com método ```complete(): string```.
* Classe abstrata ```Task``` com descrição privada e prioridade.
* Classe ```PersonalTask``` e WorkTask herdadando de Task com com comportamentos distintos ao completar.
* Classe genérica ```TaskManager<T extends TaskContract>``` para adicionar, listar por prioride e buscar por descrição.
* No uso, crie tarefas, marque como completas, filtre e busque tarefas específicas
