//Écris une fonction qui prend en argument un nombre entier et retourne son carré. 
// Affiche le résultat dans la console. Objectif : Je donne 3 à ma fonction, j’obtiens 9. 
// Je donne 2 à ma fonction, j’obtiens 4.

// Stocke le résultat de la fonction dans une variable (c’est-à-dire, créé une variable 
// qui sera égale à l’appel de la fonction). Nous allons utiliser cette variable pour la 
// donner à une autre fonction . Ecris une autre fonction qui va multiplier par 10, la variable 
// précédente. Affiche le résultat dans la console. Objectif : Je donne 9 à ma fonction de 
// multiplication, j’obtiens 90.

// Modifie le code existant et demande à l’utilisateur via une fonction existante 
// (que tu dois rechercher), le nombre qui sera en entrée de la première fonction. 
// Objectif : L’utilisateur rentre un nombre, disons 4. Dans la console, je dois voir 
// successivement 16 et 160.

//1ère partie : 
function returnSquare(num) {
    return (num * num);
}

console.log(returnSquare(3));
console.log(returnSquare(2));

//2ème partie :
let result = returnSquare(3);

function multiplyByTen(num) {
    console.log(num * 10);
}

multiplyByTen(result);

//3ème partie :
const result2 = prompt("Donnez un nombre svp");

let premierCalcul = returnSquare(result2)
console.log(premierCalcul)
multiplyByTen(premierCalcul)

// console.log(returnSquare(result2));
// multiplyByTen(returnSquare(result2));
