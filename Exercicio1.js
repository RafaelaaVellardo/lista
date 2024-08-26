/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude
o segundo produto para "bermuda". Imprima o estoque atualizado no final.
*/
let estoqueProdutos = ['camiseta, calça, sapato'];

estoqueProdutos[0] = 'camiseta'
estoqueProdutos[1] = 'calça'
estoqueProdutos[2] = 'bermuda'

estoqueProdutos.shift(0);

estoqueProdutos.push('meia');

console.log(estoqueProdutos);

