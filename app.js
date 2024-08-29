/*Pour déterminer si une année est bissextile, tu peux suivre ces étapes simples :

1. **Divisibilité par 4** : Si l'année est divisible par 4, elle pourrait être bissextile.
2. **Exception des siècles** : Si l'année est divisible par 100, elle n'est pas bissextile, sauf si...
3. **Divisibilité par 400** : Si l'année est aussi divisible par 400, alors elle est bissextile.

Voici un exemple pour clarifier :

- **2024** : Divisible par 4 (2024 ÷ 4 = 506), pas divisible par 100, donc bissextile.
- **1900** : Divisible par 4 (1900 ÷ 4 = 475), divisible par 100 (1900 ÷ 100 = 19), mais pas par 400 (1900 ÷ 400 = 4.75), donc pas bissextile.
- **2000** : Divisible par 4 (2000 ÷ 4 = 500), divisible par 100 (2000 ÷ 100 = 20), et divisible par 400 (2000 ÷ 400 = 5), donc bissextile⁴.

Si tu veux vérifier une année spécifique, n'hésite pas à me la donner et je te dirai si elle est bissextile ou non !

Source : conversation avec Copilot, 29/08/2024
(1) Comment calculer les années bissextiles: 7 étapes. https://fr.wikihow.com/calculer-les-ann%C3%A9es-bissextiles.
(2) Années bissextiles : Comment ça marche ?. https://www.youtube.com/watch?v=mywbPz3QL_A.
(3) Exercice corrigé #47: Procédure qui vérifie si une année est bissextile (366 jours) ou non. https://www.youtube.com/watch?v=Xl7Q3XtwBQ8.
(4) Leçon 9 (#9/10) : Année bissextile en Excel VBA?. https://www.youtube.com/watch?v=074TbzOqrbE.
(5) Méthode pour déterminer si une année est bissextile. https://learn.microsoft.com/fr-fr/office/troubleshoot/excel/determine-a-leap-year.
(6) Année bissextile : Liste d'années bissextiles et outil pour vérifier.. https://bing.com/search?q=comment+calculer+ann%c3%a9e+bissextile.
(7) Année bissextile : Liste d'années bissextiles et outil pour vérifier.. https://www.calendriergratuit.fr/annees-bissextiles.html.
(8) Liste année bissextile, vérifier année bissextile - Calculatrice en ligne. https://www.calculatrice-enligne.com/liste-annee-bissextile-verifier-annee-bissextile/.
*/

// exercice

/**
 * Ce que vous visez

Prise de décision (if-else et switch) & Récursivité : Il s’agit de répondre et de donner des solutions aux tâches suivantes :

Instructions

Prise de décision (si-sinon et changement) : (choisissez au moins 2 tâches ci-dessous)
Vérificateur d’année bissextile : créez une fonction qui prend une année en entrée et détermine s’il s’agit d’une année bissextile ou non. Les années bissextiles sont divisibles par 4, mais pas par 100 à moins qu’elles ne soient également divisibles par 400.

Prix des billets : Écrivez un programme qui invite l’utilisateur à entrer son âge, puis détermine le prix d’un billet de cinéma en fonction des critères suivants :

Enfants (< = 12 ans) : 10 $
Adolescents (13-17 ans) : 15 $
Adultes (> = 18 ans) : 20 $
Conseiller en vêtements météo : Élaborez un programme qui demande à l’utilisateur la température actuelle et s’il pleut ou non. Sur la base de ces informations, conseillez l’utilisateur sur les vêtements à porter.

Récursivité : (choisissez au moins 2 tâches ci-dessous)
Séquence de Fibonacci : Implémentez une fonction récursive pour générer le nième nombre de Fibonacci. La suite de Fibonacci commence par 0 et 1, et chaque nombre suivant est la somme des deux nombres précédents (0, 1, 1, 2, 3, 5, 8, ...).

Palindrome Checker : Créez une fonction récursive pour vérifier si une chaîne donnée est un palindrome (se lit de la même manière en avant et à l’envers), en ignorant les espaces, la ponctuation et les majuscules.

Fonction de puissance : Écrivez une fonction récursive pour calculer le résultat de l’élévation d’un nombre à une puissance donnée.
 */


// Exercice

/**
 * Prise de décision (si-sinon et changement) : (choisissez au moins 2 tâches ci-dessous)
Vérificateur d’année bissextile : créez une fonction qui prend une année en entrée et détermine s’il s’agit d’une année bissextile ou non. Les années bissextiles sont divisibles par 4, mais pas par 100 à moins qu’elles ne soient également divisibles par 400.
 */

/*const annee = 2023;
const entier = parseInt()
const fl = parseFloat()

function anneeBissextuel(an){
    if(an )
}
console.log(anneeBissextuel(annee))*/

// Exercice 2

/**
 * Prix des billets : Écrivez un programme qui invite l’utilisateur à entrer son âge, puis détermine le prix d’un billet de cinéma en fonction des critères suivants :

Enfants (< = 12 ans) : 10 $
Adolescents (13-17 ans) : 15 $
Adultes (> = 18 ans) : 20 $
Conseiller en vêtements météo : Élaborez un programme qui demande à l’utilisateur la température actuelle et s’il pleut ou non. Sur la base de ces informations, conseillez l’utilisateur sur les vêtements à porter.
 */

/*const demanderAge = prompt('Quel est votre age: ');

if (demanderAge <= 12) {
    console.log('Vous devez payer 10$')
    const habit = prompt('quel est la meteo ?: ')
    if (habit <= -10) {
        console.log('vous devez forcement porter un pull')
    }
} else if (demanderAge > 12 && demanderAge <= 17) {
    console.log('Vous devez payer 15$')
    const habit = prompt('quel est la meteo ?: ')
    if (habit == -10) {
        const reponse = prompt('voulez-vous mettre un pull ?:')
        if (reponse == 'oui') {
            console.log('Tenez votre pull')
        } else if (reponse == 'non') {
            console.log('D"accord')
        } else {
            console.log('J"ai rien compris, continuer')
        }
    }
} else {
    console.log('Vous devez payer 20$')
}*/
const table = [4, 5, 8 ,4]
function fibonacci(n){
    let result;
    if(n == 0){
        result = 1
    }else{
        result = n * fibonacci(n - 1)
    }
    return result

}

console.log(fibonacci(5))