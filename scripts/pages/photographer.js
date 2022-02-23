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
        displayPhotographerSelectedMedias(medias, "Popularité"); // on affiche les medias correspondant au photographe 
        // displayAllLikes(medias);
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
  function displayPhotographerSelectedMedias(medias, sortBy) {
    const mediaSection = document.getElementById("photograph-medias");

    let mediasSorted = null;

    //  tri des medias par
    mediasSorted = medias.sort((a, b) => {
      return a.likes - b.likes;
    });

    if (sortBy === "Popularité") {
      mediasSorted = medias.sort((a, b) => {
        return a.likes - b.likes;
      });
    } else if (sortBy === "Date") {
      mediasSorted.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    } else if (sortBy === "Titre") {
      mediasSorted = medias.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    
    mediasSorted.forEach((media) => {
      if(media.photographerId == photographerSelectedId) {
        const mediaModel = mediaFactory(media);
        const mediaCard = mediaModel.getMediaCard();
        mediaSection.appendChild(mediaCard);
      }
    })
  }

  //fonction d'affichage du total des likes du photographe selectionné et du tarif journalier
  function displayAllLikes(medias) {
    const allLikesAndRate = document.getElementById("all-likes-and-rate");
    medias.forEach((media) => {
        const TotalLikesModel = TotalLikesFactory(media);
        const TotalLikesCard = TotalLikesModel.getTotalLikesCard();
        allLikesAndRate.appendChild(TotalLikesCard);
      });
}

  
  getSelectedPhotographerData();
