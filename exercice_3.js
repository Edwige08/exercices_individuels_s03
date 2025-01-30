
function sendMessage(message, fromName, toName) {   //j'ai remonté l'accolade
    console.log("From : " + fromName + "\nto : " + toName + "\nMessage : " + message);   
    //j'ai fermé la parenthèse du console.log() et j'ai ajouté des sauts de lignes entre les items
}   //j'ai rajouté cette accolade qui était manquante

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");    
//j'ai redescendu cette ligne car elle était avant la définition de la fonction

// sendMessage()  --> j'ai retiré cette ligne qui ne servait à rien
sendMessage("Super on se voit mardi !", "Linda", "Marc");
//j'ai mis des parenthèses au lieu des crochets

let contactName = "Jean";
let myName = "Ada";
let myMessage = "Je t'apprends à coder tes premières fonctions";
sendMessage(myMessage, myName, contactName);
//j'ai renommé correctement les arguments utilisés avec cette fonction pour qu'ils 
//correspondent aux variables créées juste au-dessus.

//j'ai aussi rajouté des ";" en bout de chaque ligne de code.