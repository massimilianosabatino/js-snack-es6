# Esercizio di oggi: Snack Array Methods
repo: js-snack-es6  
Create, all’interno della repo, una cartellina per ogni snack.(es. snack1, snack2)  

## SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.  
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`  
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.  
Generiamo e stampiamo in console la lista per i segnaposto.  

## SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...  
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l’elenco degli studenti:  
Id  Name                Grades  
213 Marco della Rovere      78  
110 Paola Cortellessa       96  
250 Andrea Mantegna         48  
145 Gaia Borromini          74  
196 Luigi Grimaldello       68  
102 Piero della Francesca   50  
120 Francesca da Polenta    84  

### Svolgimento

#### Snack 1
//Crare array per contenere tutti gli invitati  
//Creare un oggetto per ogni singolo invitato con:
 - chiave: nome tavolo
 - chiave: nome ospite
 - chiave: numero posto
//Salvare i signoli oggetti in un nuovo array

#### Snack 2
//Crare array con oggetti i singoli studenti e relative chiavi  
//Creare array da precedente, contenente tutti i nomi convertiti in uppercase  
//Creare array da primo con i soli nomi di studenti che hanno un voto > 70  
//Creare array da primo con i soli nomi di studenti che hanno un voto > 70 && id > 120

---

## SNACK 3
Creare un array di oggetti:  
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.  
Stampare in console la bici con peso minore utilizzando destructuring e template literal  

## SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.  
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.  
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.  

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.  

### BONUS
Stampare in pagina oltre che in console!

### Svolgimento

#### Snack 3
//Creare array contenente oggetti "bici" e con chiavi:
- nome
- peso
//Creare array con tutti i pesi  
//Controllare quale è il minore tra essi  
//Assegnare ad una variabile peso minore  
//Filtrare array oggetti estrapolando solo quello/i con peso minore  
//Destrutturare array oggetto bici con peso minore  
//Stampare in consle tramite template literal nome e bici e peso  

#### Snack 4
//Creare array con aggetti "squadre" e con chiavi:  
- nome (nomi diversi per squadra)  
- puntiFatti (impostare a zero)
- falliSubiti (impostare a zero)  
//Assegnare a punti fatti e falli subuti un valore random  
//Destrutturare array  
//Creare nuovo arrai con oggetti con chiavi:  
- nome
- falli subiti
//Stampare nuovo array in console
