//Déclarer une variable contenant une valeur numérique entière

const ENTIER = 5;
let resultat = 1;

//Utiliser une boucle pour calculer la somme de tous les nombres de 1 à cette valeur
for (let index = 2; index < ENTIER+1; index++) {
    console.log(resultat);  
    resultat=resultat+index;  
}

console.log('Somme ='+resultat);