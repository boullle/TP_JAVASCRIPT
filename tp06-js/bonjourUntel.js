//Ecrivez une fonction qui prend en paramètre une variable de type chaine de caractères et affichage « Bonjour » suivi de la variable.

function bonjour(name){

    try{
        if (typeof(name)!=='string') {
            throw 'erreur: Vous devez fournir une chaine de caractère';
        }
        console.log("Bonjour "+ name);
    }catch (e){
        console.log(e);
    }
    
    
}
//Appelez cette méthode et affichez son résultat d’appel
bonjour("Lucas");
bonjour (4556);