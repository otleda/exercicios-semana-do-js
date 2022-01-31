/* 
[01] CONST & LET

const - Nao pode redefinir ou atribuir um novo valor.
let  - E bem parecido com var, so que ela tem o escopo de bloco, e nao vai poluir o espaco global.

[02] SPREAD OPERATOR

... - O spread operator, tem a mesma notacao, mas funcionalidades diferentes.
mas o que o spread faz ?
    ele pega um objeto interavel e desmenbra e pedacos individuais.
o que e um obejto interavel ?
    e qualquer obj que vc possa interar com ele, array, strings, sao objs interaveis por exemplo:
    vc pode interar por cada item, no caso da array, ou por cada caracter no caso da string.

*/

// [01]
const myName = 'Adelto'
    // const NAO suja a window, nao fica no escopo global
let nickName = 'Otleda'
    // ja e let fica no escopo global da variavel global window


// [02] SPREAD OPERATOR

 // Usando spread operator em arrays
const numbers = [120, 30, 67, 54, 5000, 10]
const numberMajor = Math.max(...numbers)

//console.log(numberMajor)

//Marvel
const personMarvels = ['Spider Man','Iron Man','Hulk','Thor']

//DC
const personDcComics = ['Superman','Batman','aquaman']

//abaixo um exemplo do spread operator interando na array
const personDcs = ['Superman','Batman','aquaman', ... personMarvels]

// concat() -> juntas as duas arrays, o mesmo que spread operator
const juncaoPersonagens =  personDcComics.concat(personMarvels)

//console.log(personDcs)
//console.log(juncaoPersonagens)


// Usando spread operator em Objetos
const person = { name : 'Adelto Almeida' }

const adress = { 
    city: 'Sao Paulo', 
    state: 'SP'
}

const dadosPlus = {
    ... person,
    ... adress, 
    contry : 'Brazil'
} 

//console.log(dadosPlus);

// Como NAO usar o Spread Operator
//const myArray = [1,3,5]
//const juncaoArray = ...myArray

//R: juncaoArray = 1,3,5 

// Outra dica: quando vc for usar o Spread Operator, para fazer uma copia de uma array
// ou objeto, vc tem que se atentar na Profundidade, segue o exemplo abaixo, elas sao referenciadas.

const persona = {
    name: 'Adelto',
    adress: {
        city: 'Sao Paulo',
        country: 'Brazil'
    }
}

const personaModify = {
    ... persona,
    adress:{... persona }
 }

personaModify.adress.city = 'Rio Grande do Sul'

console.log(`Persona - ${persona.adress.city}`);
console.log(`PersonaModify - ${personaModify.adress.city}`);


// [03] REST PARAMETERS

/* 
Ele transforma os argumentos de uma funcao em uma arrray, isso e bom pois, quando nao sabemos quantos
vai ser passando para funcao na hora da invocacao

SINTAX 
(param1, param2, ...restParams) => {}
*/





