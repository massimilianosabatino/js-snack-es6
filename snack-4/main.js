'use strict';

const teams = [
    {
        name: 'Juventus',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Palermo',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Milan',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Inter',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Bologna',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Atalanta',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Genoa',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Sevilla',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Barcellona',
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        name: 'Città di Castellana',
        pointsMade: 0,
        foulsSuffered: 0
    }
];

//Get Random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

teams.forEach(element => {
    for(const prop in element){
        if(prop !== 'name')
        element[prop] = getRandomInt(100);
    }
    console.log(element)
    
});