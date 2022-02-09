const urlParams = new URLSearchParams(window.location.search); // on recherche dans l'url de la page
const photographerSelectedId = urlParams.get("id"); // on récupère l'Id du photographe dans l'url 

// récupération des données correspondant au photographe sélectionné
function getSelectedPhotographerData() {
    fetch(`data/photographers.json`) // on récupère les données
      .then((res) => res.json())
      .then((value) => {
        photographers = value.photographers;
        medias = value.media;
        displayPhotographerSelected(photographers); // on affiche le photographe
        displayPhotographerSelectedMedias(medias); // on affiche les medias correspondant au photographe 
      })
  }

// fonction d'affichage de la carte du photographe selectionné
  function displayPhotographerSelected(photographers) {
    photographers.find((photographer) => {
      if(photographer.id == photographerSelectedId) {
        const photographerModel = photographerCardFactory(photographer);
        photographerModel.getPhotographerCard();
      }
    });
  };

// fonction d'affichage des médias du photographe selectionné
  function displayPhotographerSelectedMedias(medias) {
    const mediaSection = document.getElementById("photograph-medias");
    
    medias.forEach((media) => {
      if(media.photographerId == photographerSelectedId) {
        const mediaModel = mediaFactory(media);
        const mediaCard = mediaModel.getMediaCard();
        mediaSection.appendChild(mediaCard);
      }
    })
  }
  
  getSelectedPhotographerData();
