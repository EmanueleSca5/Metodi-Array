let numbers = [3, 5, 7, 8, 13, 15, 3];
console.log(numbers);


function somma(...x){
let totale = x.reduce((acc, n)=> acc + n);

return totale
}
let totale = somma(...numbers)
console.log(totale);


let media = somma(...numbers) / (numbers.length)
console.log(media);

let Numeriminorimedia = numbers.filter((numero)=> numero < media)
console.log(Numeriminorimedia);

