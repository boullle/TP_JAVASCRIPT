function valider() {
    let name = "";
    let surname = "";
    let birthDate = "";
    console.log(typeof name+"  "+ name);
    console.log(typeof surname+"  "+ surname);
    console.log(typeof birthDate+"  "+ birthDate);
    const afficheErreur = document.querySelector('#error');
    //!typeof name === 'undefined' && !name ==="" && !typeof surname === 'undefined' && !surname ==="" && !typeof birthDate === 'undefined' && !birthDate ===""

    // !name ==="" &&  !surname ===""  && !birthDate ===""
    if (name !=="" &&  surname !==""  && !birthDate !=="") {
        afficheErreur.innerHTML = ""; 
        name = document.querySelector('#name').value;
        surname = document.querySelector('#surname').value;
        birthDate = document.querySelector('#birthDate').value;
        console.log(typeof name+"  "+ name);
        console.log(typeof surname+"  "+ surname);
        console.log(typeof birthDate+"  "+ birthDate);
             
    }else {
        afficheErreur.innerHTML = "Veuillez remplir tous les champs: nom, prénom et date de naissance";
    }

}