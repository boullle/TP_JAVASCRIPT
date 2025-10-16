//Soit le tableau 1 suivant : [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//Soit le tableau 2 suivant : [-1, 12, 17, 14, 5, -9, 0, 18] ;

let array2 =[-1, 12, 17, 14, 5, -9, 0, 18];


//Créer un tableau qui contient la somme des 2 précédents tableaux. Attention à tenir compte de la différence de taille des tableaux.
let arraySum =[];
console.log(array1.length);
console.log(array2.length);
if(array1.length<=array2.length){
    for (let index = 0; index < array1.length ; index++) {
        arraySum[index] = array1[index] + array2[index]; 
    }
}else if (array1.length>array2.length) {
    for (let index = 0; index < array2.length ; index++) {
        arraySum[index] = array1[index] + array2[index]; 
    }
} else{
    console.log("erreur")
}


console.log(array1);
console.log(array2);
console.log(arraySum);