//Ecrivez une fonction qui prend 2 nombres a et b en paramètres et retourne le résultat suivant : a * b + a + b

function calcul(a,b){
    return a*b+a+b;
}
//Appelez cette méthode avec 2 nombres quelconques et affichez le résultat d’appel
console.log(calcul(2,3));
//Que se passe t’il si vous appelez cette fonction non pas avec des nombres mais avec des chaines de caractères ? Faites le test.
console.log(calcul("toto","lulu"));
//Le code s'execute avec l'affichage de NaN (not a number) pour la partie de l'opération avec la multiplication et une concaténation de la chaine pour les addition