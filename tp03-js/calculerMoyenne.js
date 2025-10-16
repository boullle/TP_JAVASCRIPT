//Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];


//Combiner une boucle et un test de manière à n’afficher que les entiers supérieurs à 3
let sum = 0;
let average;
for (let index = 0; index < array.length ; index++) {
        sum = sum + array[index];
    }    
average = sum / array.length;

console.log(average);
