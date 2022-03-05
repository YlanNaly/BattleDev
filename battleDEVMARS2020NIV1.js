const prompt=require("prompt-sync")();

 var tableau =[];
 var resultat ={};
  //boucle pour les questions
    for(let i=1 ; i<=6 ; i++ ){
  
          var total = tableau.push(prompt("entrez une couleur svp:")) 
         }
  //boucle pour l'accumulateur
         for(let j=0 ; j<tableau.length ; j++ ){
      
            //la couleur devient l'index

  if(!resultat[tableau[j]])
      resultat[tableau[j]] = 0
      ;
      ++resultat[tableau[j]]
                            
                              }
          
console.log(resultat)

var triage=(Object.values(resultat)) //sort les valeurs

var couleur=(Object.keys(resultat)) 

console.log("la couleur la plus populaire est la couleur:  "+couleur.filter(couleur => resultat[couleur] == triage.sort((a,b)=>-a+b)[0]))
