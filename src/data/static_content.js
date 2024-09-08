export default function staticContent() {
  const testiDomande = [
    "Quando studio, se sottolineo o evidenzio parole e frasi mi concentro di più.",
    'Mi piace lavorare senza pianificare tutto all\'inizio, ma "aggiustando il tiro" man mano che procedo.',
    "Preferisco che l'insegnante ci assegni lavori che ognuno di noi possa poi svolgere come preferisce.",
    "Mi risulta difficile capire un termine o un concetto se non mi vengono dati degli esempi.",
    "Mi confondono grafici e diagrammi che non sono accompagnati da spiegazioni scritte.",
    "Preferisco i lavori da svolgere passo per passo, completando un compito prima di iniziare il successivo.",
    'Ricordo meglio un argomento se posso fare un "esperienza diretta", per esempio facendo un esperimento di laboratorio, costruendo un modello, facendo una ricerca, ecc.',
    "Preferisco imparare leggendo un libro piuttosto che ascoltando una lezione.",
    "Sono soddisfatto se di un argomento capisco le idee generali, senza considerare i particolari.",
    "Capisco meglio un argomento parlandone o discutendone con qualcuno piuttosto che soltanto leggendo un testo.",
    "Mi piace lavorare in gruppo.",
    "Quando studio su un libro imparo di più guardando figure, grafici e mappe piuttosto che leggendo il testo scritto.",
    "Se devo raccontare o riferire qualcosa mi soffermo molto sui dettagli.",
    "Riesco facilmente a seguire qualcuno che parla anche se non lo guardo in faccia.",
    "Capisco meglio le istruzioni di un compito se mi sono presentate per iscritto.",
    "Se si deve lavorare a gruppi, preferisco che sia l'insegnante a decidere come formare i gruppi.",
    "Durante una lezione o una discussione scrivere o disegnare qualcosa mi aiuta a concentrarmi.",
    "Imparo e ricordo di più quando studio da solo.",
    "In un lavoro di gruppo preferisco che l'insegnante ci lasci liberi di distribuirci i compiti all'interno del gruppo.",
    "Organizzo il mio tempo, sia nello studio che nelle altre attività.",
    "Quando leggo un testo mi creo mentalmente delle immagini sulla storia, i personaggi o le idee.",
    "Quando studio ho bisogno di pause frequenti e di movimento fisico.",
    "Alla fine di un lavoro di gruppo mi sento di avere imparato di più che se avessi lavorato da solo.",
    'Preferisco gli esercizi con una sola soluzione o risposta piuttosto che gli esercizi più "aperti" e "creativi".',
    "Quando in classe lavoro con un compagno o in gruppo ho la sensazione di perdere tempo.",
    "Mi risulta più facile ricordare figure e illustrazioni in un libro se sono stampate a colori vivaci.",
    "Imparo meglio se parto da una visione generale dell'insieme piuttosto che da dettagli e aspetti specifici.",
    "Preferisco che una regola o una teoria mi venga chiaramente spiegata prima di applicarla in esempi ed esercizi.",
    "Per capire un testo che sto studiando mi aiuto facendo disegni e diagrammi.",
    "Imparo di più durante le lezioni in classe che studiando a casa.",
    "Non mi piace leggere o ascoltare le istruzioni per un compito; preferirei cominciare subito a lavorarci.",
    "Capisco meglio le istruzioni di un compito se mi vengono spiegate a voce e non soltanto fornite per iscritto.",
    "Se un compito deve essere svolto a gruppi, preferisco che siano gli studenti stessi a decidere come formare i gruppi.",
    "Prendo appunti durante le spiegazioni dell'insegnante e le discussioni in classe e li rileggo poi per conto mio.",
    "Mi risulta abbastanza facile sintetizzare ciò che è stato detto in una discussione.",
    "Quando studio mi concentro di più se leggo o ripeto a voce alta.",
    "Imparo di più a casa che in classe.",
    "Se devo decidere se qualcosa è giusto o corretto, mi baso più sull'istinto che sulla logica.",
    "Preferisco imparare vedendo un video o ascoltando una cassetta piuttosto che leggendo un libro.",
    "Quando studio su un libro prendo appunti o faccio riassunti.",
  ];

  const AreeTabella = {
    areaA : {
      gruppo1: [5,8,15,34,40],
      gruppo2: [4,12,21,26,29],
      gruppo3: [10,14,32,36,39],
      gruppo4: [1,7,17,22,31],
    },
    areaB:{
      gruppo1:[6,13,20,24,28],
      gruppo2:[2,9,27,35,38]
    },
    areaC:{
      gruppo1:[3,16,18,25,37],
      gruppo2:[11,19,23,30,33]
    }
  }

  return { testiDomande, AreeTabella };
}
