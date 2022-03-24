const photographerSelectedId = new URLSearchParams(window.location.search).get("id"); // on récupère l'Id du photographe dans l'url
const sortBy = document.getElementById('sortBy');

// récupération des données correspondant au photographe sélectionné
function getSelectedPhotographerData() {
    fetch(`data/photographers.json`) // on récupère les données
      .then((res) => res.json())
      .then((value) => {
        photographers = value.photographers;
        medias = value.media;

        displayPhotographerSelected(photographers); // on affiche le photographe
        displayPhotographerSelectedMedias(medias); // on affiche les medias correspondant au photographe 

        sortBy.onchange = function (){displayPhotographerSelectedMedias(medias)};

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
    const allLikes = document.getElementById("photographer-total-like");
    let totalLikes = 0;

    switch (sortBy.value) {
      case "popularity" :
        medias.sort (function (a, b) {
            return b.likes - a.likes;
        })
        break;

    case "date" :
        medias.sort (function (a, b) {
            return new Date(b.date) - new Date(a.date);
        })
        break;

    case "title" :
        medias.sort (function (a, b) {
            return a.title.localeCompare (b.title);
        })
        break;
  }

    medias.forEach((media) => {
      if(media.photographerId == photographerSelectedId) {
        const mediaModel = mediaFactory(media);
        const mediaCard = mediaModel.getMediaCard();
        mediaSection.appendChild(mediaCard);
        totalLikes = totalLikes + media.likes;
      }
    })

    allLikes.innerHTML = `<p>${totalLikes} <i class="fas fa-heart full"></i></p>`;    
  }




  
  getSelectedPhotographerData();
