
PREMESSA
Lo scopo di questa discussione è di condividere la nostra esperienza.

COSA SONO I SIGNALS
sono un modo per esprimere lo stato di un'applicazione.

PERCHÈ SONO INTERESSANTI (A MIO AVVISO)?
Sono interessanti perchè garantiscono ottime performace di 'default' e una developer experience semplice.
Una delle caratterisiche più interessanti dei signals e che, a differenza dello stato di un componente espresso mediante l'hook useState, è che puo risiedere anche 'fuori' dal componente stesso, prestandosi in questo modo a rappresentare uno stato globale dell' applicazione.

COME HO SCOPERTO I SIGNALS?
Per caso mi sono imbattuto nella lettura della documentazione di un framework di front end (solid.js) e lì per la prima volta ho sentito parlare di questa nuova 'metodologia'.

COME POSSO INIZIARE AD USARLI?
I signals non sono 'nativamente' disponibli in react. Esistono diverse librerie che le implementano. Quella che abbiamo utilizzato sul progetto Area Riservata Cittadino e che viene utilizzare anche in questa demo è la una piccola libreria per preact, compatibile anche con react:
https://www.npmjs.com/package/@preact/signals-react

PERCHÈ LI UTILIZZIAMO SULL'AREA RISERVATA CITTADINO SE NON È CHIARA LA COMPATIBILITÀ CON REACT?
Abbiamo letto articolo e discussione per capire se fosse sicuro utilizzare tale libreri con un progetto di produzione. Abbiamo trovato pareri discordanti ma nonostatne ciò abbiamo (ho) deciso di correre il rischio: lo stato globale che gestiamo nell'applicazione è davvero minimal e se dovessimo accorgerci di problematiche sappiamo di poter introdurre una soluzione più solida e consololidata (redux) in tempi brevi. Nonstante questa premessa non abbiamo riscontrato nessun malfuznionamente già da diversi mesi di utilizzo. 

PERCHÈ NON LI CONSIGLIEREI PER STATI GLOBALI COMPLESSI?
Oltre al mancanto supporto ufficiale di React quello che mi spaventerebbe nella gestione di uno stato globale complesso è la manncanza (o ignoranza) di una metodologia e di tool per il debug (penso per esempio all'estensione del browser per redux) 



