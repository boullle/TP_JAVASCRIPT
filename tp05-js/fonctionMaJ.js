//Créer une fonction qui prend en paramètre une chaine de caractères.
//Cette fonction retourne la chaine de caractères passée en paramètre avec la première lettre en majuscule.
function ecrireEnMajuscule(chaineDeCaractere){
    return chaineDeCaractere.toUpperCase();
}

//execution
let chaineAtraiter = "bonjour";
let chaineEnMajuscule = ecrireEnMajuscule(chaineAtraiter);
console.log("minuscule: "+ chaineAtraiter)
console.log("majuscule: "+chaineEnMajuscule);
