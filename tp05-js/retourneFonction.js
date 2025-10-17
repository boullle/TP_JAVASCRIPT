//Créer une fonction qui prend en paramètre un entier n et retourne une fonction qui elle-même :
//Prend en paramètre un nombre nb
//Retourne ce nombre multiplié par n
function multiplication(n) {
    return function multiplierNombre(nb) {
        return n*nb
    }
}






//Invoquez cette fonction avec 2 valeurs de n différentes et stockez le résultat dans 2 variables différentes.
let multiplierPar6 = multiplication(6);
let mulyiplierPar10 =multiplication(10);


//Les variables ainsi retournées sont également des fonctions
let multiplier3par6 = multiplierPar6(3);
let multiplier4par10 =mulyiplierPar10(4);

//affichage des resultats

console.log(" 3*6 = "+multiplier3par6);
console.log(" 4 * 10 = " + multiplier4par10);