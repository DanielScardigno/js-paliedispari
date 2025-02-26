//input
const userWord = prompt("Scrivi una Parola");

//output
let messaggio;
if (userWord.length === 0) {
    messaggio = "Errore, inserisci una parola"
} else if (ELaParolaPalindroma(userWord) === true) {
    messaggio = `${userWord} è una parola palindroma!`
} else {
    messaggio = `${userWord} non è una parola palindroma`
}
console.log(messaggio);

//Funzione
function ELaParolaPalindroma(word) {
    const letters = [];
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    const reverseWord = letters.reverse();
    if (reverseWord.join("") === word) {
        return true;
    } else {
        return false;
    }
}