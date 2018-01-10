
/**
 * La classe Developper est une sorte de Person qui aura juste
 * une propriété languages en plus, listant les langages de
 * programmation connus par le dév.
 */
class Developper extends Person {
    //Le constructor attend les mêmes paramètres que la Person avec
    //en plus le paramètre languages
    constructor(name,surname,age,languages) {
        //On fait appel au constructeur du parent
        super(name,surname,age);
        //On définit la propriété supplémentaire
        this.languages = languages;
    }
    /**
     * On fait ici ce qu'on appel une redéfinition ou un override de
     * méthode. C'est à dire qu'on redéfinit une méthode présente
     * chez le parent pour modifier un peu (ou beaucoup) son fonctionnement
     * sans pour autant changer la manière dont on l'appel.
     * Ici, on veut que lae Developper ait quasiment le même HTML que la
     * Person mais avec en plus les langages qu'ielle connait.
     */
    toHTML() {
        //On commence par récupérer le HTML généré par la méthode du parent
        let p = super.toHTML();
        //On crée un span dans lequel on met les langages
        let span = document.createElement('span');
        span.textContent = `languages: ${this.languages}`;
        //On append le span dans l'élément récupéré de la méthode parent
        p.appendChild(span);
        //On renvoit l'élément en question modifié
        return p;
    }
}