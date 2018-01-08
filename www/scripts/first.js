

/**
 * Ici, on crée une instance de SmallDog en lui donnant en argument
 * les différentes valeurs qu'on voudra associées au chien (si on passe
 * la souris sur le SmallDog il nous montre le constructor et les paramètres attendus)
 * On stock ensuite l'instance obtenue dans la variable doge.
 */
let doge = new SmallDog('rex', 'corgi', '10/05/2017');

/**
 * On crée une deuxième instance de SmallDog, qui sera complètement 
 * indépendante de la première mais qui aura juste la même structure et 
 * les mêmes méthodes
 */
let doge2 = new SmallDog('Fido', 'Husky', '05/10/2017');
//Les console log nous indique que les deux variable contiennent un objet
//de type SmallDog mais avec des valeurs différentes
console.log(doge);
console.log(doge2);


//Ici, on crée un élément p
let p = document.createElement('p');
//On lui assigne comme contenu textuelle la variable doge, sauf que celle
//ci contient un objet, la méthode toString() de la classe de cet objet
//est donc appelée, et on assigne au textContent le retour de cette méthode
p.textContent = doge;
//On met l'élément p dans le body
document.querySelector('body').appendChild(p);
