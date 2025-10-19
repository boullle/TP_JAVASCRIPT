
//Créez une fonction creerGestionnaire() qui retourne un objet littéral contenant
function creerGestionnaire() {
  return {
    //Une propriété tableau de taches
    tableauDeTaches: [],
    ajouterTache: function(description) {
      //ajoute une nouvelle tâche.
      const tache = {
        description: description,
        termine: false,
      }
      this.tableauDeTaches.push(tache);
    },
    terminerTache: function (index) {
      //marque une tâche comme terminée, en fonction de son index.
      this.tableauDeTaches[index].termine = true;
    },
    afficherTache: function (index) {
      //affiche toutes les tâches avec leur état (terminée ou non).
      console.log(
        `Tache ${index} : ${this.tableauDeTaches[index].description} -terminé: ${this.tableauDeTaches[index].termine}`
      );
    },
  }
}

const listeDeTache = creerGestionnaire();
listeDeTache.ajouterTache("faire le tp05-js");
listeDeTache.afficherTache(0);
listeDeTache.terminerTache(0);
listeDeTache.afficherTache(0);