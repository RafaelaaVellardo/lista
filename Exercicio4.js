/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/
let lista = []
 lista.push(prompt("1 tarefa"));
 lista.push(prompt("2 tarefa"));
 lista.push(prompt("3 tarefa"));

 lista.splice(1, 1)
 lista.push("Ligar para o médico")
 alert(lista)
