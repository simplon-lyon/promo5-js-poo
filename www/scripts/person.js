
class Person {
    constructor(name,surname,age,isDev = false) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isDev = isDev;
    }
    /**
     * La méthode toHTML va permettre de créer un élément HTML contenant
     * les informations de l'instance de Person qui l'exécutera.
     */
    toHTML() {
        //On choisi arbitrairement de mettre notre Person dans un élément p
        let p = document.createElement('p');
        //On met dans le textContent du p les infos de la person
        p.textContent = `name: ${this.name}, Surname : ${this.surname}, Age: ${this.age}, isDev: ${this.isDev}`;
        //On return l'élément p
        return p;
    }
}
