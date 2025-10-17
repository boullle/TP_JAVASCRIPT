//Créer une fonction qui vérifie le contenu d’un tableau
//Si le tableau ne contient que des nombres alors la fonction retourne true
//Si le tableau ne contient que des nombres alors la fonction retourne true
function isArrayOfNumber(tableau){
    let bool = false;    
    for (let index = 0; index < tableau.length; index++) {
        if (typeof(tableau[index])==="number")  {
            bool = true;            
        }else{
            bool = false;
            return bool
        }
    }
    return bool;    
}
//Réalisez 3 appels à cette fonction avec :
//Un tableau contenant des nombres
let array =[1,45,146,-4565,51,0.58];
console.log(isArrayOfNumber(array));
//Un tableau contenant des nombres et une chaine de caractères
let array1 =[1,45,146,-4565,"vfcjj",0.58];
console.log(isArrayOfNumber(array1));
//Un tableau vide.
let array2 =[];
console.log(isArrayOfNumber(array2));