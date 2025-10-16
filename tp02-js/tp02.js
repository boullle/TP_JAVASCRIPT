
//Déclarez 2 variables NUM_1 et NUM_2 contenant des valeurs numériques entières.

const NUM_1 = 2;
const NUM_2 = 1;

console.log('NUM_1 '+NUM_1);
console.log('NUM_2 '+NUM_2);

//Affichez les résultats des 5 opérations

let resulatAddition = NUM_1 + NUM_2;
console.log('resultat addition' + resulatAddition);

let resulatSoustraction = NUM_1 - NUM_2;
console.log('resultat Soustraction' + resulatSoustraction);

let resulatMultiplication = NUM_1 * NUM_2;
console.log('resultat Multiplication' + resulatMultiplication);

let resulatDivision = NUM_1 / NUM_2;
console.log('resultat Division' + resulatDivision);

let resulatModulo = NUM_1 % NUM_2;
console.log('resultat Modulo' + resulatModulo);

//Affichez les résultats des 4 opérations de comparaison

let NUM_1PlusGrandQueNUM_2 = NUM_1 >= NUM_2;
console.log('NUM_1PlusGrandQueNUM_2' + NUM_1PlusGrandQueNUM_2);

let NUM_1PlusPetitQueNUM_2 = NUM_1 <= NUM_2;
console.log('NUM_1PlusPetitQueNUM_2' + NUM_1PlusPetitQueNUM_2);


let NUM_1EgalaNUM_2 = NUM_1 == NUM_2;
console.log('NUM_1EgalaNUM_2' + NUM_1EgalaNUM_2);


let NUM_1DifferentDeaNUM_2 = NUM_1 != NUM_2;
console.log('NUM_1DifferentDeaNUM_2' + NUM_1DifferentDeaNUM_2);

//Déclarez 2 variables b1 et b2 booléennes, une valant true et l’autre false.

const B_1 = true;

const B_2 = false;

console.log("B_1 "+B_1);
console.log("B_2 "+B_2);

//Affichez les résultats des opérations logiques suivantes

//b1 && b2

let operationET = (B_1 && B_2);

console.log("operationET "+ operationET);

//b1 || b2


let operationOU = (B_1 || B_2);

console.log("operationOU "+ operationOU);

//!b1

let operationNON_B_1 = !B_1;

console.log("operationNON_B_1 "+ operationNON_B_1);

//!b2

let operationNON_B_2 = !B_2;

console.log("operationNON_B_2 "+ operationNON_B_2);
