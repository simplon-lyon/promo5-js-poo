let tableau = [];
display();

//On capture le formulaire
const formulaire = document.querySelector('#formulaire');
//On lui ajoute un event sur le submit
formulaire.addEventListener('submit', function(event){
    //On commence par stopper l'exécution par défaut du formulaire
    event.preventDefault();

    //On récupère les différentes informations du formulaire
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let age = document.querySelector('#age').value;
    let isDev = document.querySelector('#isDev').checked;

    //On crée une instance de Person en utilisant les info du formulaire
    let person = new Person(name, surname, age, isDev);
    //On ajoute l'instance de Person qu'on vient de créer dans le tableau
    tableau.push(person);
    //On lance la fonction pour mettre à jour l'affichage
    display();
    
    
});

/**
 * La fonction display est celle qui se charge de l'affichage du HTML,
 * elle boucle sur le tableau de Person et les affiche dans un élément ul
 */
function display() {
    //On capture le ul où on mettra nos Person
    let ul = document.querySelector('#list-person');
    //On remet à zéro le ul (pasque sinon à chaque fois qu'on lance
//display() ça répétera [vous pouvez tentez de commenter la ligne pour voir])
    ul.innerHTML = '';

    //On fait une boucle sur le tableau de Person
    for(let person of tableau) {
        //Pour chaque person on crée un li
        let li = document.createElement('li');
        //On append dans ce li l'élément HTML renvoyé par la méthode
        //toHTML de la classe Person
        li.appendChild(person.toHTML());
        //On append ce li sur le ul
        ul.appendChild(li);
    }

    
}