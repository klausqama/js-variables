const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'Città'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
let index = city.indexOf('Y')
console.log(index)

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
let sottostringa = city.slice(4,8)
console.log(sottostringa)

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
 // Output:  "New Delhi"
 let sostituzione = city.replace('York', 'Delhi')
 console.log(sostituzione)

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
 // Output: "New York City"
 let cityy = 'City'
 console.log(`${city}` + ` ${cityy}`) 

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
// Output: "HELLO"
let maiuscolo = hello.toUpperCase()
console.log(maiuscolo)