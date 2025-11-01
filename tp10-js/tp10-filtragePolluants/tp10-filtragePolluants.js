function initialiserDonnees(min,max) {
    fetch("https://digicode.cleverapps.io/json/pays/pollution")
    // .then(function(res) {
    //       //console.log(res);
    //       //on peut verifier le status de la reponse ici.
    //       return res.text();// génère une nouvelle promesse.
    //   })
      .then(function (res) {
        return res.json();
      })
      // .then(function (bodyText) {
      //     console.log(bodyText);
      // })

      .then(function (data) {
        console.log(data);
        const mininum = document.getElementById("minimum");
        const maximum = document.getElementById("maximum");
        console.log(mininum);
        console.log(maximum);

        let affichage ="<table><thead> <tr><th>Pays les plus polluants pour le " +data.polluant +" (" +data.unite +") en " +data.annee+"</tr></th><tr><th><label>Minimum :<input type='number' id='minimum'></label><label>Maximum :<input type='number' id='maximum'></label><button type='button' id='submit' onclick='valider()'>Valider</button></th></tr><tr><th>Nom</th><th>Valeur</th><th>%</th></tr></thead>";
        if (min==1 && max==1){
          affichage = affichage +"<div>CHANGEMENT</div>";
        }
        for (let index = 0; index < data.pays.length; index++) {
          const element = data.pays[0][index];
          affichage =affichage+'<tbody><tr><td><img src="https://flagsapi.com/'+data.pays[index].code.toUpperCase()+'/flat/16.png">'+data.pays[index].nom+"</td><td>"+data.pays[index].valeur +"</td><td>"+data.pays[index].pourcentage+"</td></tr></tbody>";
        };
        affichage = affichage + "</table>";
        let zoneAffichage = document.querySelector("#listePays");
        zoneAffichage.innerHTML = affichage;
        function valider() {
          initialiserDonnees(mininum,maximum);
        };
      })
  

}

