/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;


var inutile = "vraiment inutile"

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var proposition = '';
var nbEssais = 1;


while(proposition != solution && nbEssais<=6) {
        
    proposition = prompt('Saisissez un chiffre');
    
    
    if(proposition > solution)
         console.log(proposition +' est trop grand ! ' );
    else if(proposition < solution)
         console.log(proposition +' est trop petit ! ' );
    
    else{
         console.log('Bravo! La solution était '+solution+ '. Vous avez trouvé en ' +nbEssais+ ' essais.'  );
      
    }
    
    nbEssais++;
}
    
if(nbEssais >= 6)
    console.log('Perdu! La solution était '+solution);

 




     
               
             
     
        
