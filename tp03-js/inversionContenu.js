//Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];


//Créer un tableau arrayCopy et copier tous les éléments de array dans arrayCopy mais dans l’ordre inverse.

let arrayCopy =[];

indexArrayCopy = 0
for (let index = ((array.length)-1); index >-1 ; index--) {
    arrayCopy[indexArrayCopy]=array[index];
    indexArrayCopy++;
}

console.log(array);
console.log(arrayCopy);