//Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];


//Combiner une boucle et un test de manière à n’afficher que les entiers supérieurs à 3

for (let index = 0; index < array.length ; index++) {
    if (array[index]>3) {
    console.log(array[index]);    
    }    
}