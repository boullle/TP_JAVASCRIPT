




//Cette fonction doit retourner un message d’erreur dans le cas où un élément du tableau n’est pas un nombre

function isArrayOfNumber(tableau){
    let bool = false;    
    for (let index = 0; index < tableau.length; index++) {
        if (typeof(tableau[index])==="number")  {
            bool = true;            
        }else if (typeof(tableau[index])==="number") {
            return bool;
        } else{
            bool = false;
            return bool;
        }
    }
    return bool;    
}

//EXERCICE FONCTIONCONTROLETABLEAU
function arrayAverage(tableau){   
    
    if (isArrayOfNumber(tableau)) {
        let sum = 0;
        let average;
        for (let index = 0; index < tableau.length ; index++) {
            sum = sum + tableau[index];
            }    
        average = sum / tableau.length;
        return average;
    }else{
        console.log("Calcul de la moyenne impossible, tableau vide ou problème de type d'un ou de plusieurs éléments du tableau")
    }    
}
//Réalisez 3 appels à cette fonction avec :
//Un tableau contenant des éléments
let array =[-1, 12, 17, 14, 5, -9, 1];
let moyenne = arrayAverage(array);
console.log("la moyenne est de "+moyenne);

//Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que votre fonction retourne 0 dans le cas où le tableau est vide.
let array1 =[];
let moyenne1 = arrayAverage(array1);
console.log(moyenne1);

//Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?
let array2 =['-1', '12', '17', '14', '5', '-9', '1'];
let moyenne2 = arrayAverage(array2);
console.log(moyenne2);
