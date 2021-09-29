# Air Pollution

Quest'applicazione ci permetterà di vedere il livello della qualità dell'aria, il livello di presenza di azoto nell'aria e dei commenti sulla qualità dell'aria, sarà possibile cercare una città oppure utilizzare la geolocalizzazione

# Realizzazione 

Dopo aver analizzato le richieste e i componenti da utilizzare ho inizio il progetto:

1. HTML 
    - Dopo aver creato il file collego lo collego con il foglio di stile e lo script e in seguito aggiungo Bootstrap nel caso potesse servirmi, la mappa LeaFlet e axios.
    - Scrivo una navbar dove ci sarà il titolo e la sezione per la ricerca, con il nome della città in cui si è in quel momento.
    - Infine scrivo la sezione info dove abbiamo la mappa e tutti i dati relativi all'inquinamento, io come standard ho messo Milano.
    - Alla fine della pagina c'è il footer.
2. SCSS
    - Per lo stile preferisco sempre usare SCSS perché lo trovo più pratico e ordinato.
    - Ho scelto di creare diversi file per ogni componente della pagina, in modo che ci sia più ordine e sia più facile modificare una determinata cosa.
    - Nella cartella base troviamo delle configurazioni di base e i font.
    - Nella cartella component troviamo i componenti della pagina quali bottoni, footer, nav e searchbar, ognuno con uno stile diverso per quel componente.
    - Nella cartella layout vi è il layout della pagina home, nel caso si dovessero creare altre pagine si inserirebbe un altro foglio di stile.
    - Nella cartella media invece troviamo le impostazioni media per la pagina home in questo caso.
    - Alla fine di tutto vi è il main.scss dove importeremo tutto il necessario per far funzionare la pagina.
3. JavaScript
    - Nell'apposita cartella vi è il file .js.
    - Inizio dichiarando delle variabili che selezioneranno determinati elementi del html (io preferisco usare querySelector rispetto a getElementBy perché così capisco subito se è un id o una classe o un elemento).
    - Dichiaro poi l'apiKey che andrà a prendere il valore dal file .env in modo da rendere il valore privato.
    - Aggiungo la mappa.
    - Creo la funzione del bottone, che quando verrà cliccato tramite una chiamata axios cercherà la "location" che l'utente ha scritto nella barra di ricerca.
    - Tramite un if chiedo di confrontare il valore status del api call, nel caso il valore sia diverso da ok vorrà dire che la città non è stata trovata e allora segnaliamo l'errore con una scritta, poi sempre tramite degli if che si baseranno sul valore aqi vado a modifcare la variabile ht che modifcherà la scritta nel blocco Health Notes.
    - Creo una variabile inputkey che selezionerà la searchbar e aggiungo un evento tramite il quale se premiamo il tasto invio mentre siamo nella searchbar esso cercherà la città scritta.
    - Infine creo la funzione del bottone geo, che quando verrà cliccato cercherà la stazione più vicina alla nostra posizione.

# Conclusione

L'applicazione lavora in tutte le sue funzioni sia su desktop che nella sua versione mobile. Ci ho messo un po' di tempo per creare il progetto ma vado fiero del risultato ottenuto. 

Deploy eseguito su netlify: https://lucid-lamarr-1ff308.netlify.app/
