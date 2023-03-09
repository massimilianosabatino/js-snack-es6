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
        weight: 9
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
console.log(weight);

//Search for smallest
const lighter = Math.min(...weight);
console.log(lighter);

//Compare and get lighter
const bikeLighter = bikes.filter(element => element.weight === lighter);
console.log(bikeLighter);