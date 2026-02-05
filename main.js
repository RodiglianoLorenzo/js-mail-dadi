//controllimo la lista emial che abbiamo
//subbito dopo dobbibamo chiedere al utente di mettere la sua email 
//dopo dobbiamo controllare se la sua email esiste nella lista 
//se e presente nella lista email stampiomo un messagio appropriato 
//altrimenti stampiomo un messaggio appropriato

const EmailList = ["Paperino@gmail.com","Qiyana@gmail.com","Nonsonounwebdevelopment@gmail.com","Fabio@gmail.com"]

let utente = prompt("Inserisci la tua email")

for (let i = 0; i < EmailList.length; i++){
    if (EmailList[i] === utente){
        console.log("Fai parte della lista Puoi entrare");
        break;
    }else{
        console.log("Non fai parte della lista non puoi entrare");
        
    }
}



