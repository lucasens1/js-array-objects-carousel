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



//Prendo la riga dove appendere tutte le immagini
const rowThumbnailsElem = document.querySelector(".my-thumbnails");
/* console.log(rowThumbnailsElem); */


//Milestone 1
//per ogni elemento oggetto presente nell'array images, scorro e utilizzando una variabile curImg, ne prendo le proprietà
images.forEach((curImg) => {
/*   console.log(curImg);*/
  // Creo l'elemento immagini
  const newThumbImg = document.createElement("img");

  // Non potendo scrivere usando innerHTML causa self-closing tag, uso i suoi attributi
  newThumbImg.className = "img-fluid my-thumbnail active";
  newThumbImg.src = curImg.image;
  newThumbImg.alt = "Thumbnail of " + curImg.title;

/*   console.log(newThumbImg); */
  //Appendo nel codice
  rowThumbnailsElem.append(newThumbImg);
})


//Milestone 1 . 2
//Prendo l'elemento gigante della thumbnail
const thumbParent = document.querySelector(".my-carousel-images");
/* console.log(thumbParent); */

//Stabilisco che la prima immagine dell'array è quella attiva nella big thumbnail

//Popolo la big thumbnail
images.forEach((curImg, index) => {
    // Creo l'elemento immagini
    /* console.log(curImg, index) */
    //In questo caso inizializzo al primo
    const newBigThumbImg = document.createElement("div");
    if(index === 0){
      newBigThumbImg.classList.add("my-carousel-item", "active");
      newBigThumbImg.innerHTML = `
      <img
        class="img-fluid"
        src="${curImg.image}"
        alt="${curImg.title}"
      />
                  <div class="item-description px-3">
                    <h2>${curImg.title}</h2>
                    <p>
                      ${curImg.text}
                    </p>
                  </div>`
    } else {
      newBigThumbImg.classList.add("my-carousel-item")
      newBigThumbImg.innerHTML = `
      <img
        class="img-fluid"
        src="${curImg.image}"
        alt="${curImg.title}"
      />
                  <div class="item-description px-3">
                    <h2>${curImg.title}</h2>
                    <p>
                      ${curImg.text}
                    </p>
                  </div>`
    }
    
    /* console.log(newBigThumbImg); */
    //Appendo nel codice
    thumbParent.append(newBigThumbImg);
})

// ---------------------------------------------------------------

/* Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra. */

const prevBtn = document.querySelector(".my-previous");
/* console.log(prevBtn); */
const nextBtn = document.querySelector(".my-next");
/* console.log(nextBtn); */

prevBtn.addEventListener("click", preImgSlide);
nextBtn.addEventListener("click", nextImgSlide);

//Mi servo di un indice
let indexActive = 0;

//Prendo l'array Node di item del Carosello
const itemsCarousel = document.querySelectorAll('.my-carousel-item');
console.log(itemsCarousel);

function displayCarouselItem(indexToShow){
  //Mi servo di un ciclo che toglie la classe active all'item corrente (tutti)
  itemsCarousel.forEach(curItem => curItem.classList.remove('active'));
  //Aggiunge all'elemento con l'indice passato la classe active
  itemsCarousel[indexToShow].classList.add('active');
}

function nextImgSlide(){
  //Operatore ternario : l'indice attivo è posizionato nell'ultimo elemento dell'array? Allora Azzero Altrimenti Incremento
  indexActive = (indexActive === itemsCarousel.length - 1) ? 0 : indexActive + 1
  displayCarouselItem(indexActive);
}

function preImgSlide(){
    //Operatore ternario : l'indice attivo è posizionato nel primo elemento dell'array? Allora Posiziono all'ultimo indice dell'array Altrimenti Decremento
  indexActive = (indexActive === 0) ? itemsCarousel.length - 1 : indexActive - 1;
  displayCarouselItem(indexActive);
}

/* BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente. */
const rowNode = document.querySelectorAll(".my-thumbnail")
console.log(rowNode)
for(let l = 0; l < rowNode.length; l++){
  //Entro nel nodo con l'indice aggiungo l'Event e poi semplicemente passo l'indice collegato all'immagine nella funzione creata precedentemente
  rowNode[l].addEventListener("click", () => {
    indexActive = l;
    displayCarouselItem(indexActive);
  })
}