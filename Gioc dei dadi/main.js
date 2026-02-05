//per prima cosa dobbiamo verifiacre che il pc ci un numero random che arriva fino a 100
// poi  facciamo la stessa cosa con lutente overro ci dia un numero randm fino a 100
// poi merttiamo in confronto i due nummeri e il numero piu alto vince

let NumberUtente = Math.floor(Math.random() * 7);
let NumberPc = Math.floor(Math.random() * 7);
console.log(NumberUtente, NumberPc);

if(NumberUtente < NumberPc){
    console.log("Hai il numero piu grande 'HAI VINTO'");
    
}else if (NumberUtente > NumberPc){
    console.log("Il Pc ha il numero piu grande 'HAI PERSO'");
    
} else{
    console.log("Avete date lo srteso numero");
    
}
