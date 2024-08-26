/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

let filmesfavoritos = ["star wars", "star wars 2", "star wars 3"];

filmesfavoritos[0] = "star wars 4";

if (filmesfavoritos[filmesfavoritos.lenght - 1] !== "Harry Potter"){

    filmesfavoritos.push("Harry Potter")
    
}
alert(filmesfavoritos)

