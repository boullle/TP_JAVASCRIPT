function valider() {
    const nombre_1 = Number(document.querySelector('#nombre1').value);
    const nombre_2 = Number(document.querySelector('#nombre2').value);
    console.log(typeof nombre_1+" "+nombre_1);
    console.log(typeof nombre_2+" "+nombre_2);
    const selecteurElement = document.querySelector("#operateur")
    console.log(selecteurElement.value);
    const afficheErreur = document.querySelector('#error');
    
    if (!Number.isNaN(nombre_1) && !Number.isNaN(nombre_2)) {
        let resultat;
        if (selecteurElement.value==='additionner') {
            resultat= nombre_1+nombre_2;
            const afficheResultat= document.querySelector('#resultat');
            afficheResultat.innerHTML = "Le résultat de l’addition est : "+resultat;
            afficheErreur.innerHTML = "";
        }else if (selecteurElement.value==='soustraire') {
            resultat= nombre_1-nombre_2;
            const afficheResultat= document.querySelector('#resultat');
            afficheResultat.innerHTML = "Le résultat de la soustraction est : "+resultat;
            afficheErreur.innerHTML = "";
        }else if (selecteurElement.value==='multiplier') {
            resultat= nombre_1*nombre_2;
            const afficheResultat= document.querySelector('#resultat');
            afficheResultat.innerHTML = "Le résultat de la multiplication est : "+resultat;
            afficheErreur.innerHTML = "";
        }else if (selecteurElement.value==='diviser') {
            resultat= nombre_1/nombre_2;
            const afficheResultat= document.querySelector('#resultat');
            afficheResultat.innerHTML = "Le résultat de la division est : "+resultat;
            afficheErreur.innerHTML = "";
        }else if(selecteurElement.value==='off'){
            afficheErreur.innerHTML="Veuillez choisir un opérateur de calcul";
        }
    
    }else {
        afficheErreur.innerHTML = "Vous devez saisir un nombre";
    }  
}