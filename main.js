
// *Snack1*
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).
// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.
// *Snack3*
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari


// snack1

    // let numero = parseInt(prompt(`inserisci num`))

    // if( numero % 2 == 0){
    //     console.log(numero) 

    // }else{
    //     numero += 1;
    //     console.log(numero)
    // }


    // snack2


    // let nomi = ['tony', 'walter', 'will']
    // let cognomi = ['soprano', 'white', 'smith']

    // let utenteRandom = []

    // for( let i=0; i < 3; i++ ){

    //     let randomNomiIndex = nomi[Math.floor(Math.random() * nomi.length )];
    //     let randomcognomiIndex = cognomi[Math.floor(Math.random() * cognomi.length)];
    //     let invitato = `${randomNomiIndex} ${randomcognomiIndex}`;
        
    //     utenteRandom.push(invitato)
        
    // }

    // console.log(utenteRandom)



    // snack3


    let somma = 0;

    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

    for(let i = 0; i < num.length; i++){  

      if(num[i] % 2 !== 0){
      somma += num[i]
      }
   }

   console.log(somma);
     
   


    





