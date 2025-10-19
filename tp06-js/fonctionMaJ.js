//Créer une fonction qui prend en paramètre une chaine de caractères.
//Cette fonction retourne la chaine de caractères passée en paramètre avec la première lettre en majuscule.
function ecrireEnMajuscule(chaineDeCaractere){
    try {
        if (typeof(chaineDeCaractere)!=='string') {
            throw 'erreur: saisissez un mot'
        }
         return chaineDeCaractere.toUpperCase();
    } catch (e) {
        console.log(e);
    }
   
}

//execution
let chaineAtraiter = "bonjour";
let chaineEnMajuscule = ecrireEnMajuscule(chaineAtraiter);
console.log("minuscule: "+ chaineAtraiter)
console.log("majuscule: "+chaineEnMajuscule);


let chaineAtraiter1 = 456;
let chaineEnMajuscule1 = ecrireEnMajuscule(chaineAtraiter1);
console.log("minuscule: "+ chaineAtraiter1)
console.log("majuscule: "+chaineEnMajuscule1);
