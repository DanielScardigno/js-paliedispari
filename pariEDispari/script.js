//input
const userWord = prompt("Digita Pari o Dispari");
const userNumberStr = prompt("Digita un numero compreso tra 1 e 6");

//operazione
const userWordUpper = userWord.toUpperCase();
const userNumber = parseInt(userNumberStr);
let rndNumber = getRndInteger(1, 6);
let messaggio;
if (userWordUpper !== "PARI" && userWordUpper !== "DISPARI") {
    messaggio = `Errore, inserire solo "Pari" o "Dispari`;
} else if (userNumber < 1 || userNumber > 6 || isNaN(userNumber) === true) {
    messaggio = "Errore, inserire solo numeri da 1 a 6";
} else if (rndPariODispari(userNumber) === userWordUpper) {
    messaggio = "Hai vinto!";
} else {
    messaggio = "Oh no! Hai perso";
}

//output
console.log(`Hai scelto ${userWordUpper}`);
console.log(`Hai scelto ${userNumber}`);
console.log(`Dico ${rndNumber}!`);
console.log(`${rndNumber} + ${userNumber} = ${rndNumber + userNumber} ---> ${rndPariODispari(userNumber)}`);
console.log(messaggio);

//funzioni
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function rndPariODispari(number) {
    if ((number + rndNumber) % 2 === 0) {
        return "PARI";
    } else {
        return "DISPARI";
    }
}