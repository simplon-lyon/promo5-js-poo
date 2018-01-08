// let person = new Person('Simplon','Jean', 23, true);

// console.log(person);

//On capture le formulaire
const formulaire = document.querySelector('#formulaire');
//On lui ajoute un event sur le submit
formulaire.addEventListener('submit', function(event){
    //On commence par stopper l'exécution par défaut du formulaire
    event.preventDefault();

    //On récupère les différentes informations du formulaire
    let name = document.querySelector('#name').value;

    console.log(name);
    
});