/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listadecompras = []

listadecompras[0] = prompt('Qual o primeiro item da sua lista?')
listadecompras[1] = prompt('Qual o segundo item da sua lista?')
listadecompras[2] = prompt('Qual o terceiro item da sua lista?')

if (listadecompras[2] = "leite"){
    
    console.log(listadecompras);

}
else{

    listadecompras.push('leite')
    console.log(listadecompras);
}






















