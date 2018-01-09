

/**
 * L'héritage permet à une classe de posséder automatiquement toutes 
 * les méthodes et les propriétés de son parent, en plus de celles qu'elle
 * définira elle même.
 * Ici, notre class ShowDog hérite de SmallDog, ce qui signifie qu'elle
 * possède directement les propriétés de SmallDog (name, race, birthdate)
 * ainsi que ses méthodes (bark et toString)
 */
class ShowDog extends SmallDog {

    constructor(name,race,birthdate,pedigree) {
        //Dans le constructeur d'une classe enfant, il est obligatoire
        //de faire appel au constructeur de la classe parent, la classe
        //parent est accessible via le mot clef super
        super(name,race,birthdate);
        this.pedigree = pedigree;
    }

    tricks() {
        console.log('Jump over a thang and sit');
    }

    /**
     * On peut redéfinir une méthode de la classe parent
     */
    bark() {
        //et on peut appeler la version de la méthode présente dans la
        //classe parent, toujours avec super
        super.bark();
        alert('wouf wouf');
    }
}
