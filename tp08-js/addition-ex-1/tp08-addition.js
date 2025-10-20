

function valider() {
    let nombre_1 = document.querySelector('#nombre1');
    let nombre_2 = document.querySelector('#nombre2');
    nombre_1 = Number(nombre_1.value);
    nombre_2 = Number(nombre_2.value);
    console.log(typeof nombre_1+" "+nombre_1);
    console.log(typeof nombre_2+" "+nombre_2);
    const afficheErreur = document.querySelector('#error');
    if (!Number.isNaN(nombre_1) && !Number.isNaN(nombre_2)) {
        console.log(nombre_1);
        console.log(nombre_2);
        const resultat= nombre_1+nombre_2;
        const afficheResultat= document.querySelector('#resultat');
        afficheResultat.innerHTML = "Le résultat de l’addition est : "+resultat; 
         afficheErreur.innerHTML = "";       
    } else {
        afficheErreur.innerHTML = "Vous devez saisir un nombre";
    }
    
}