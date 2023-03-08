'use scrict';

const invitate = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

//Crea contenitore per nuova lista
const invitateDetailed = [];

//Per ogni elemento inserisce nell'array invitateDetailed un oggetto con tavolo, nome e posto come chiavi
invitate.forEach((element, index) => {
    invitateDetailed.push({table: 'Tavolo Vip', name: element, place: index + 1});
});

//Stampa la lista in console con una visualizzazione in modo organizzato
invitateDetailed.forEach((element, index) => console.log(`${index + 1} : ${element.table} - ${element.name} - posto: ${element.place}`));