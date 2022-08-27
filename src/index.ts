
// string, boolean, number, ...
let x: number = 10;

x = 12;

console.log(x);

// inferencia x annotation
let y = 12; //inferência
let z: number = 13; // annotation

// tipos básicos
let firstName: string = "matheus";
let age: number = 30;
const isAdmin: boolean = true;

// objetos
const myNumbers: number[] = [1,2,3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());

myNumbers.push(5);


// tuplas
let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["a", "b", "c"]]


// Objetos literais
const user: {name: string; age: number} = {
   name: 'Pedro',
   age: 18,
}

// any aceita qualquer tipo - mas seria inutilizar o typeScript
let a: any = 0;
a = "teste";
a = true;
a = ["1", "2,"]

// union type - O Union é um dos tipos do TS que nos permite combinar um ou mais tipos de types.
let id: string | number = "10"
id = 200;



// Type Alias - determinar o nome de um tipo - evita duplicação de código
type myIdType = number | string

let userId: myIdType = 10;
const productId: myIdType = "000001"
const shirId: myIdType = 123;

console.log(userId);
userId = "texto";

// enum - enumera uma coleção onde conseguimos utilizar dados complexos de forma mais simples. 
// exemplo: tamanho de roupas (size: pequeno, size: médio, ...)
enum Size {
   p = "Pequeno",
   m = "Médio",
   g = "Grande"
}

const camisa = {
   name: "Camisa gola V",
   size: Size.g,
}


// Literal types - determinar um valor como um tipo
let login: "logado" | null;
login = "outrovalor"; // apesar de ser let eu não consigo alterar para outro diferente do tipo 
login = null;

console.log(login);
// console.log(productId);
// console.log(shirId);


