
class Person {
    constructor(name,surname,age,) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    /**
     * La méthode toHTML va permettre de créer un élément HTML contenant
     * les informations de l'instance de Person qui l'exécutera.
     */
    toHTML() {
        //On choisi arbitrairement de mettre notre Person dans un élément p
        let p = document.createElement('p');
        //On met dans le textContent du p les infos de la person
        p.textContent = `Name: ${this.name}, Surname : ${this.surname}, Age: ${this.age}`;
        //On return l'élément p
        return p;
    }
}
