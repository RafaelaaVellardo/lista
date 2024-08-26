/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = []

tarefasLimpeza.push(prompt("1 tarefa"));
tarefasLimpeza.push(prompt("2 tarefa"));
tarefasLimpeza.push(prompt("3 tarefa"));
tarefasLimpeza.push(prompt("4 tarefa"));

tarefasLimpeza[1] = 'Limpar banheiro'

tarefasLimpeza.splice(2, 1)
console.log(tarefasLimpeza)




