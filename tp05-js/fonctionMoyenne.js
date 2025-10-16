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
function arrayAverage(tableau){   
    
    if (isArrayOfNumber(tableau)) {
        let sum = 0;
        let average;
        for (let index = 0; index < tableau.length ; index++) {
            sum = sum + tableau[index];
            }    
        average = sum / tableau.length;
        console.log(sum+ "  " + average);
        return average;
    }else{
        console.log("Calcul de la moyenne impossible, tableau vide ou problème de type d'un ou de plusieurs éléments du tableau")
        //return false;
    }    
}
let array =[-1, 12, 17, 14, 5, -9, 1];
let moyenne = arrayAverage(array);
console.log(moyenne);

