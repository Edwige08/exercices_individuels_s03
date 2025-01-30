//Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console. 
// Objectif : Voir dans la console : “Le résultat de la somme est 6”

// Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat 
// d’une addition de 3 nombres mais cette fois-ci à partir de 3 arguments. Déclarer 3 variables 
// qui prennent chacune une valeur de votre choix. Passez ces variables à la fonction 
// addition3NumbersWithArg(…).
// Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la 
// somme de vos trois valeurs de variables.

// Appelez addition3NumbersWithArg() 3 fois avec des valeurs d’argument différentes. 
// Objectif : Voir dans la console : “Le résultat de la somme est X ” “Le résultat de la somme 
// est Y” “Le résultat de la somme est Z”

//1ère partie : 
function addition3Numbers() {
    console.log('Le résultat de la somme est ' + (1 +2 + 3));
}

addition3Numbers(1, 2, 3);

//2ème partie : 
function addition3NumbersWithArg(a, b, c) {
    console.log('Le résultat de la somme est ' + (a + b + c));
}

addition3NumbersWithArg(12, 34, 56);

//3ème partie : 
let argument1 = 34;
let argument2 = 3;
let argument3 = 76;

addition3NumbersWithArg(argument1, argument2, argument3);

let argument4 = 64;
let argument5 = 98;
let argument6 = 12;

addition3NumbersWithArg(argument4, argument5, argument6);

let argument7 = 67;
let argument8 = 33;
let argument9 = 9;

addition3NumbersWithArg(argument7, argument8, argument9);