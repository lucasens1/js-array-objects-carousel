const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

/* Milestone 1:
Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro e buon divertimento! :slightly_smiling_face: :muscle: :paperella: */

/* Milestone 1 :
- Elimino il contenuto statico .. 
- const Array -> prendo la row -> ciclo che scorre Array -> creo Elemento ad ogni ciclato -> scrivo nell'elemento -> Appendo l'elemento al Padre /row
Milestone 2 :
- aggiungo un EventListener ai bottoni -> ciclo a dx e ciclo a sx -> Importante studiare i casi limite : Parto dal primo e torno indietro ? Parto dall'ultimo e vado avanti
Milestone 3 :
- Aggiungo le thumbnails, delle sorta di immagini link che al click mi portino l'immagine clickata sul blocco grande.
- Quindi estaggo ogni elemento che mi serve, le miniature .small-block, la foto in grande .big-block -> rendo le foto interattive quindi con Event listener aggiunto magari al div di appartenenza
Milestone 4 : 
- SetTimeout
Milestone 5 :
- Creo bottoni magari dinamicamente, invertono ordine di lettura e mettono pausa. */

//Prendo la riga dove appendere tutte le immagini
const rowThumbnailsElem = document.querySelector(".my-thumbnails");
console.log(rowThumbnailsElem);


//Milestone 1
//per ogni elemento oggetto presente nell'array images, scorro e utilizzando una variabile curImg, ne prendo le proprietà
images.forEach((curImg) => {
  console.log(curImg);

  // Creo l'elemento immagini
  const newThumbImg = document.createElement("img");

  // Non potendo scrivere usando innerHTML causa self-closing tag, uso i suoi attributi
  newThumbImg.className = "img-fluid my-thumbnail active";
  newThumbImg.src = curImg.image;
  newThumbImg.alt = "Thumbnail of " + curImg.title;

  console.log(newThumbImg);

  //Appendo nel codice
  rowThumbnailsElem.append(newThumbImg);
})


//Milestone 2
