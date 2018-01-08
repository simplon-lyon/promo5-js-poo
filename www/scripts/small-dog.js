/**
 * class css =/= class js
 * 
 * Une class en programmation va être en gros un genre de "moule" à
 * partir du quel on pourra créer des objets concret appelés instances.
 * La class va définir toutes les propriétés d'un concept d'objet ainsi
 * que les actions disponible pour ce type d'objet (par exemple, un chien
 * qui a une propriété nom et qui peut aboyer)
 * Au moment de faire la class, on ne sait pas encore quel objet concret
 * sera créé avec, c'est juste un concept abstrait, mais tous les objets
 * qu'on créera depuis cette class auront la même structure que celle ci.
 * Par convention, les nom des classes s'écrivent en capitalized camelcase
 * (commencent par une majuscule, puis majuscule à chaque nouveau mot)
 */
class SmallDog {
    /**
     * Le constructor est une méthode (function) spéciale des classes qui
     * sera appelé à chaque fois qu'on nouvelle instance de cette classe
     * est créée.
     * Il ne devra être utilisé que pour faire des assignations de valeurs
     * et définir les propriétés de la class actuelle.
     * Il peut accepter des arguments qu'on donnera au moment de faire
     * l'instance de classe. (ici, notre constructor accepte 3 arguments
     * qu'il utilise pour assigner aux trois propriétés corespondantes de
     * la classe SmallDog)
     */
    constructor(paramName,paramRace,paramBirthdate) {
        //Pour définir une propriété, on utilise le this qui pointe sur
        //l'instance de classe utilisée
      this.name = paramName;
      this.race = paramRace;
      this.birthdate = paramBirthdate;
    }
    /**
     * On peut définir des méthodes (function) directement dans le corps
     * de la classe. Ces méthode seront disponibles pour toutes les
     * instances de la classe (ici, tous les chiens peuvent aboyer)
     */
    bark() {
        alert('waf');
    }

    /**
     * La méthode toString() est une méthode spéciale qui est appelée
     * implicitement à chaque fois qu'on utilise un objet à un endroit
     * où une chaîne de caractère est attendue.
     * Le retour de cette méthode représente la chaîne de caractère en
     * laquelle sera "transformé" l'objet
     */
    toString() {
        return `SmallDog = name:${this.name},race:${this.race}, birthdate:${this.birthdate}`;
    }

}