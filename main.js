//controllimo la lista emial che abbiamo
//subbito dopo dobbibamo chiedere al utente di mettere la sua email 
//dopo dobbiamo controllare se la sua email esiste nella lista 
//se e presente nella lista email stampiomo un messagio appropriato 
//altrimenti stampiomo un messaggio appropriato

let EmailList = ["Qiyana@gmail.com","Paperino@gmail.com","Nonsonounwebdevelopment@gmail.com","Fabio@gmail.com"]
let utente = prompt("Inserisci la tua email")
//let Messaggio = "Non puoi entrare";
let Messaggio = false;

for (let i = 0; i < EmailList.length; i++){
    if (EmailList[i] === utente){
        Messaggio = true; 
    }
    
}

if (Messaggio){
    console.log("puoi entrae");
    
} else{
    console.log("non puoi entrare");
    
}

console.log(Messaggio);
