//Soit le tableau 1 suivant : [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];

let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];

//Soit le tableau 2 suivant : [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

let array2 =[3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];


//Ecrire le code permettant de compter le nombre d’éléments en commun dans ces 2 tableaux
let counter = 0;


    for (let index1 = 0; index1 < array1.length ; index1++) {
        for (let index2 = 0; index2 < array2.length ; index2++) {
            if(array1[index1]==array2[index2]){
                counter++;
            }
            console.log(counter);
        }
    }

    console.log("nombre d'élément en commun dans les 2 tableaux :   " + counter);
