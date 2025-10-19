//Créer une fonction qui prend en paramètre une chaine de caractères.
//Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa première lettre mis en majuscule

function mettrePremiereLettreEmajuscule(phraseAmodifier){
    let phraseModifie ;
    let tableauDeMots = phraseAmodifier.split(" ");

for (let index = 0; index < tableauDeMots.length; index++) {
    let motAmodifie = tableauDeMots[index];
    console.log(motAmodifie);
    let motModifie = motAmodifie.charAt(0).toUpperCase()+motAmodifie.slice(1); 
    phraseModifie = phraseModifie + motModifie + " ";
    console.log(motModifie);
}
return phraseModifie;
}

//execution
let phrase = "bonjour je suis jean-jacques";
let phraseTraite = mettrePremiereLettreEmajuscule(phrase);
console.log(phrase);
console.log('\n=================================================\n');
console.log(phraseTraite);

