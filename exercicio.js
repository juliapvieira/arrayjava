//Exercício 1 — Criando array simples
//Crie um array chamado cores com três cores e mostre a segunda cor no console.

let cores= ["rosa", "azul", "preto"];
console.log(cores[2]);

//___________________________________________________________________________________________


//Exercício 2 — Primeiro e último número
//Crie um array numeros com cinco números e mostre o primeiro e o último.
let numero= ["1", "2", "3", "4", "5"];
console.log(numero[0]);// adiciona ao final
console.log(numero[4]);
//____________________________________________________________________________________________

//Exercício 3 — Adicionando item ao array
//Crie um array frutas com duas frutas. Depois adicione uma terceira usando push() e mostre o array.
let frutas= ["banana", "maça", "mexerica"];
console.log(frutas[2]);

frutas.push("laranja"); // adiciona ao final
console.log(frutas[3]);
//_____________________________________________________________________________________________

//Exercício 4 — Removendo o último item
//Crie um array nomes com quatro nomes e remova o último usando pop().

let nomes= ["ju", "dafny", "gabriel", "joão"];
console.log(nomes[1]);

nomes.pop(); //remove do final (no nosso caso a laranja [3])
console.log(nomes);


//Exercício 5 — Contando elementos
//Crie um array times com quatro times e mostre quantos elementos existem nele.
let times= ["São Paulo", "Flamengo", "Santos", "Fluminense"];
console.log(times.length) //lenght serve p mostrar a quantidade
