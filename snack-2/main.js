'use strict';

const student = [
    {
        id : 213,
        name : 'Marco della Rovera',
        grades : 78,
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        grades : 96,
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        grades : 48,
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        grades : 74,
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        grades : 68,
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        grades : 50,
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        grades : 84,
    }
];

//Lista con nome studente in maiuscolo
const studentName = student.map((student) => {
    return {name: student.name.toLocaleUpperCase()};
})

console.log('Lista richiesta 1');
studentName.forEach((element) => console.log(element.name));