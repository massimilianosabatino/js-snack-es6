'use strict';

const students = [
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
const studentName = students.map((student) => {
    return {name: student.name.toUpperCase()};
})
/*
//Lista con tutte le chiavi incluse
const studentName = students.map((student) => {
    return {
        ...student,
        name: student.name.toUpperCase()
    };
})
*/

console.log('Lista richiesta 1');
studentName.forEach((element) => console.log(element.name));

console.log('----');

//Lista richiesta con voto superiore a 70
const studentSuper70 = students.filter(student => student.grades > 70);

console.log('Lista richiesta 2');
studentSuper70.forEach(student => console.log(student.name + ' - ' + 'voto: ' + student.grades));

console.log('----');

//Lista richiesta con voto superiore a 70 e id superiore di 120
const studentSuperTop = students.filter(student => student.grades > 70 && student.id > 120);

console.log('Lista richiesta 3');
studentSuperTop.forEach(student => console.log(`ID: ${student.id}
${student.name} - voto: ${student.grades}`));