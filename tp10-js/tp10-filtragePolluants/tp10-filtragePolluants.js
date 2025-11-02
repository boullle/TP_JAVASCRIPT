function initialiserDonnees(min, max) {
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

      let affichage =
        "<table><thead> <tr><th colspan='3'>Pays les plus polluants pour le " +
        data.polluant +
        " (" +
        data.unite +
        ") en " +
        data.annee +
        "</th></tr><tr><th>Nom</th><th>Valeur</th><th>%</th></tr><tr><th colspan='3'><label>Minimum :<input type='number' id='minimum'></label><label>Maximum :<input type='number' id='maximum'></label><button type='button' id='submit' onclick='valider()'>Valider</button></<tr></tr></thead>";
      console.log(min + max);
      if (min < 0 || max < 0) {
        alert("Veuillez entrer des valeurs positives");
      } else if (min > max) {
        alert("Veuillez rentrer un minimum inférieur au maximum");
      } else if (
        (min == 0 || isNaN(min)) &&
        (max == Number.MAX_VALUE || isNaN(max))
      ) {
        for (let index = 0; index < data.pays.length; index++) {
          const element = data.pays[0][index];
          affichage =
            affichage +
            '<tbody><tr><td><img src="https://flagsapi.com/' +
            data.pays[index].code.toUpperCase() +
            '/flat/16.png">' +
            data.pays[index].nom +
            "</td><td>" +
            data.pays[index].valeur +
            "</td><td>" +
            data.pays[index].pourcentage +
            "</td></tr></tbody>";
        }
        affichage = affichage + "</table>";
      } else {
        for (let index = 0; index < data.pays.length; index++) {
          const element = data.pays[0][index];
          if (data.pays[index].valeur > min && data.pays[index].valeur < max) {
            affichage =
              affichage +
              '<tbody><tr><td><img src="https://flagsapi.com/' +
              data.pays[index].code.toUpperCase() +
              '/flat/16.png">' +
              data.pays[index].nom +
              "</td><td>" +
              data.pays[index].valeur +
              "</td><td>" +
              data.pays[index].pourcentage +
              "</td></tr></tbody>";
          }
        }
        affichage = affichage + "</table>";
      }
      let zoneAffichage = document.querySelector("#listePays");
      zoneAffichage.innerHTML = affichage;
    });
}
function valider() {
  let minimum = document.getElementById("minimum");
  let maximum = document.getElementById("maximum");
  minimum = Number.parseInt(minimum.value, 10);
  maximum = Number.parseInt(maximum.value, 10);
  if (Number.isNaN(minimum)) {
    minimum = 0;
  }
  if (Number.isNaN(maximum)) {
    maximum = Number.MAX_VALUE;
  }
  console.log(minimum);
  console.log(maximum);
  initialiserDonnees(minimum, maximum);
}
