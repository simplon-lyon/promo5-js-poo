I. TP class Personne ([Person](www/scripts/person.js), [formulaire js](www/scripts/form-person.js), [formulaire html](www/form-person.html))
Faire une class Person qui aura un name, un surname, un age et un isDev, puis faire un formulaire html qui crée une instance de Person au submit
1) Créer un fichier form-person.html et le js associé, ainsi qu'un js qui contiendra uniquement la class Person
2) Dans person.js, faire une déclaration de class Person avec son constructor et ses différentes propriétés (name, surname, age, isDev)
Déjà on peut tester dans form-person.js de faire une instance en dur de la Person et d'en faire un console log pour voir si ça fonctionne
3) Dans le fichier form-person.html, faire un form html avec 3 input text un 1 input checkbox (pour si isDev ou pas)
4) Dans le fichier form-person.js, ajouter un event au submit du formulaire html qui récupérera les différentes valeurs des inputs
Les afficher en console, pour voir que ça fonctionne déjà
5) Dans l'event du submit, une fois qu'on arrive bien à récupérer les infos, utiliser ces mêmes info pour créer une instance de Person puis en faire un console.log


II. "Stocker" et afficher les personnes ([Person](www/scripts/person.js), [formulaire js](www/scripts/form-person.js), [formulaire html](www/form-person.html))
Maintenant qu'on arrive à créer des instances de personne via le formulaire, le but va être de les stocker en mémoire dans un tableau et d'afficher le contenu de ce tableau en html via une boucle et une méthode de la classe Person
1) Créer un tableau à la racine du fichier form-person js et faire en sorte de mettre l'instance de Person créé par le formulaire dans ce tableau à chaque fois qu'on valide le form
2) Faire une fonction display qui va faire une boucle sur le tableau de person et faire un console log de chacune des personnes. On lancera cette fonction au chargement de la page puis à chaque validation du formulaire
3) Ajouter à la classe Person une méthode toHTML() qui renverra la personne sous forme de html (soit sous forme de string, soit sous forme d'élément DOM) qu'on pourra append là où on veut
4) Modifier la fonction display pour faire qu'elle utilise la méthode toHTML() de chaque personne pour les afficher

III. Héritage et Polymorphisme ([Person](www/scripts/person.js), [Developper](www/scripts/developper.js), [formulaire js](www/scripts/form-person.js), [formulaire html](www/form-person.html))
Créer une nouvelle classe Developper qui héritera de la classe Person et se contentera d'ajouter une propriété languages et de redéfinir la méthode toHTML() pour modifier un peu l'affichage, modifier ensuite le formulaire pour faire soit un Developper soit une Person
A- L'héritage
1bis) Modifier la classe Person pour retirer la propriété isDev et toutes ses référence dans le code (aussi bien côté formulaire que côté classe)
1) Créer un nouveau fichier developper.js et créer dedans une classe Developper qui hérite de Person
2) Créer un constructor à cette classe pour rajouter la propriété languages et ne pas oublier de faire appel au constructor du parent (super)
3) Redéfinir la méthode toHTML(), c'est à dire mettre dans la classe Developper une méthode qui s'appelle exactement pareil que la méthode toHTML() du parent
4) Dans cette méthode, récupérer le résultat de l'appel de la méthode du parent (en utilisant super.toHTML() ), on a maintenant un élément html de type p dans une variable
5) Créer un nouvel élément de type span par exemple, et lui mettre en textContent les languages du Developper. Puis, append le span au p que l'on a récupéré dans l'étape précédente et return le p
6) Tester que l'affichage est bien différent en faisant à la main un new Developper et en faisant un appendChild de sa méthode toHTML() dans le body ou ailleurs

B- Le Formulaire
1) Rajouter dans le html, dans le form un élément de type fieldset avec une id dev, mettre dans celui ci un nouveau label et un input type text avec comme name et id languages
2) Faire en sorte de cacher ce fieldset par défaut, via du css (display: none;)
3) Rajouter un event sur l'input type checkbox qui fera en sorte d'afficher (display:block) ou de cacher (display:none) le fieldset quand on click sur la checkbox
4) Dans l'event submit du formulaire, modifier le code avec un if-else selon si l'input checkbox est coché ou non
S'il n'est pas coché, le comportement est le même que celui qu'on a fait hier
S'il est coché, il va falloir récupérer la valeur de l'input languages, puis créer une instance de Developper plutôt qu'une instance de Person