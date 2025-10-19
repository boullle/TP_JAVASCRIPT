
//EXERCICE FONCTIONCONTROLETABLEAU
function arrayAverage(tableau) {
  try {
    // if (typeof(tableau) !== "number") {
    for (let index = 0; index < tableau.length; index++) {
        if (typeof(tableau[index]) !== "number" || !Array.isArray(tableau)) {
          //throw new Error("vous devez rentrer un tableau de nombre");
            
          throw "vous devez rentrer un tableau de nombre";
        }
    }
    // if (isArrayOfNumber(tableau)) {
      let sum = 0;
      let average;
      for (let index = 0; index < tableau.length; index++) {
        sum = sum + tableau[index];
      }
      average = sum / tableau.length;
      return average;
    // }
    // if (typeof(tableau) !== "number") {
    //   throw "vous devez rentrer un tableau de nombre";
    // }
    //   let sum = 0;
    //   let average;
    //   for (let index = 0; index < tableau.length; index++) {
    //     sum = sum + tableau[index];
    //   }
    //   average = sum / tableau.length;
    //   return average;
    // } 
  } catch (e) {
    console.log(e);
  }
}
//Réalisez 3 appels à cette fonction avec :
//Un tableau contenant des éléments
let array = [-1, 12, 17, 14, 5, -9, 1];
let moyenne = arrayAverage(array);
console.log("la moyenne est de " + moyenne);

//Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que votre fonction retourne 0 dans le cas où le tableau est vide.
let array1 = "Mon nom est personne";
let moyenne1 = arrayAverage(array1);
console.log(moyenne1);

//Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?
let array2 = [-1, "oups", 17, 14, 5, -9, 1.45585];
let moyenne2 = arrayAverage(array2);
console.log(moyenne2);




// retour console si on test si le paramètre tableau n'est pas un nombre
// billb@DESKTOP-49L93MQ MINGW64 /d/diginamic/workspace_web_diginamic/Front-End/TP_JAVASCRIPT/tp06-js (master)
// $ node fonctionMoyenne.js 
// vous devez rentrer un tableau de nombre
// la moyenne est de undefined
// vous devez rentrer un tableau de nombre
// undefined
// vous devez rentrer un tableau de nombre
// undefined

