// let person = new Person('Simplon','Jean', 23, true);

// console.log(person);

const formulaire = document.querySelector('#formulaire');

formulaire.addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.querySelector('#name').value;

    console.log(name);
    
});