//Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//Rechercher le plus grand élément du tableau

let index = 0;
let maxValue = array[index];
while (index < array.length) {
    if (maxValue < array[index]) {
    maxValue = array[index];    
    } 
    index++;
}
console.log(maxValue);