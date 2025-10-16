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
// let array =[1,45,146,-4565,"vfcjj",0.58];
// console.log(isArrayOfNumber(array));