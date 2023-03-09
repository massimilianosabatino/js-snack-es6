'use strict';

const bikes = [
    {
        name: 'Atala',
        weight: 16
    },
    {
        name: 'Basso',
        weight: 12
    },
    {
        name: 'Bianchi',
        weight: 13
    },
    {
        name: 'Bottecchia',
        weight: 10
    },
    {
        name: 'Carrera',
        weight: 8
    },
    {
        name: 'Lombardo',
        weight: 8
    },
    {
        name: 'Coppi',
        weight: 15
    },
    {
        name: 'Cipollini',
        weight: 11
    },
    {
        name: 'Bartolomei',
        weight: 15
    }
];

//Make array of weight
const weight = [];
bikes.forEach(element => weight.push(element.weight));

//Search for smallest
const lighter = Math.min(...weight);

//Compare and get lighter
const bikeLighter = bikes.filter(element => element.weight === lighter);

/* Destruttura e stampa un solo risultato
//Destructuring
const [objBikeLighter] = bikeLighter;
const {name, weight: kg} = objBikeLighter;
const {name, weight: kg} = bikeLighter[0];

//Print result - single
console.log(`La bici più leggera in assoluto è:
Marca bici: ${name}
Peso: ${kg}`);
*/

//Print result
console.log('Le bici più leggere in catalogo sono:')
for(const {name: valN, weight: valW} of bikeLighter) {
    console.log(`Marca bici: ${valN}
Peso: ${valW}`);
}