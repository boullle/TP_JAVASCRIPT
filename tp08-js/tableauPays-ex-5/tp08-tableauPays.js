function initialiserDonnees() {
  let data = {
    polluant: "CO2",
    unite: "milliards de tonnes",
    annee: 2017,
    pays: [
      { nom: "Chine", valeur: 9.26, pourcentage: 28.2, code: "cn" },
      { nom: "Etats-Unis", valeur: 4.76, pourcentage: 14.5, code: "us" },
      { nom: "Inde", valeur: 2.16, pourcentage: 6.6, code: "in" },
      { nom: "Russie", valeur: 1.54, pourcentage: 4.7, code: "ru" },
      { nom: "Japon", valeur: 1.13, pourcentage: 3.4, code: "jp" },
      { nom: "Allemagne", valeur: 0.72, pourcentage: 2.2, code: "de" },
      { nom: "Corée du Sud", valeur: 0.6, pourcentage: 1.8, code: "kr" },
      { nom: "Iran", valeur: 0.57, pourcentage: 1.7, code: "ir" },
      { nom: "Canada", valeur: 0.55, pourcentage: 1.7, code: "ca" },
    ],
  };
  //let titre="";
  //let zoneTitre = document.querySelector('#titre');
  //document.querySelector('#titre').innerHTML = 'Pays les plus polluants pour le '+data.polluant + " ("+ data.unite+") en "+data.annee;
  //document.querySelector('#annee').innerHTML = data.annee;
  let affichage = '<table><thead> <tr><th>Pays les plus polluants pour le '+data.polluant + " ("+ data.unite+") en "+data.annee+'</tr></th><tr> <th>Nom</th><th>Valeur</th><th>%</th></tr></thead>';
  for (let index = 0; index <data.pays.length; index++) {
    const element =data.pays[0][index];
    affichage = affichage + '<tbody><tr><td><img src="https://flagsapi.com/'+data.pays[index].code.toUpperCase()+'/flat/16.png">'+ data.pays[index].nom +'</td><td>'+ data.pays[index].valeur+'</td><td>'+ data.pays[index].pourcentage+'</td></tr></tbody>'
  }
  affichage = affichage + '</table>';
  let zoneAffichage = document.querySelector("#listePays");
  zoneAffichage.innerHTML = affichage ;
  

}
