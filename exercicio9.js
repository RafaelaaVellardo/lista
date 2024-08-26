/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/
let metasSemana = []

metasSemana[0] = prompt('Qual a sua primeira meta?')
metasSemana[1] = prompt('Qual a sua segunda meta?')
metasSemana[2] = prompt('Qual a sua terceira meta?')

if( metasSemana[metasSemana.length - 1] != "exercícios físicos"){

    metasSemana [1] = ('Praticar esportes')
    console.log(metasSemana);
}

else{
    
    console.log(metasSemana);
}

