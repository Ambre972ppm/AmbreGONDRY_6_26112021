const photographerSelectedId = new URLSearchParams(window.location.search).get("id"); // ON RECUPERE L'ID DU PHOTOGRAPHE SELECTIONNE DANS L'URL
const mediaSection = document.getElementById("photograph-medias"); 

// RECUPERATION DES DONNEES DU PHOTOGRAPHE SELECTIONNE
function getSelectedPhotographerData() {
    fetch(`data/photographers.json`)
      .then((res) => res.json())
      .then((value) => {
        photographers = value.photographers;
        medias = value.media;

        displayPhotographerSelected(photographers); // ON AFFICHE LA CARTE DU PHOTOGRAPHE SELECTIONNE
        sortMedias(medias);
        sortPopular(medias);
        addLikes();

      })
  }

// FONCTION D'AFFICHACHE DE LA CARTE DU PHOTOGRAPHE
  function displayPhotographerSelected(photographers) {
    // ON RETROUVE NOTRE PHOTOGRAPHE PARMIS LA LISTE DE PHOTOGRAPHES A L'AIDE DE SON IDI
    photographers.find((photographer) => {
      if(photographer.id == photographerSelectedId) {
        const photographerModel = photographerCardFactory(photographer);
        photographerModel.getPhotographerCard(); //ON CREE NOTRE CARTE PHOTOGRAPHE
      }
    });

    
  };

// FONCTION D'AFFICHAGE DES MEDIAS DU PHOTOGRAPHE 
  function displayPhotographerSelectedMedias(medias) {
    const allLikes = document.getElementById("photographer-total-like");

    const allLikesCount = document.createElement('span');
    allLikesCount.setAttribute('id', 'totalLikesCount');
    allLikes.appendChild(allLikesCount);

    const allLikesIcon = document.createElement('i');
    allLikesIcon.setAttribute('class', 'fas fa-heart');
    allLikes.appendChild(allLikesIcon);

    let totalLikes = 0;

   
    medias.forEach((media) => {
      if(media.photographerId == photographerSelectedId) {
        const mediaModel = mediaFactory(media);
        const mediaCard = mediaModel.getMediaCard();
        mediaSection.appendChild(mediaCard);
        totalLikes = totalLikes + media.likes;
      }
    })

    allLikesCount.textContent = totalLikes;
  }

  // Gestion du tri selon le filtre sélectionné
function sortMedias(medias) {
  let sortBy = document.getElementById("sortBy");
  sortBy.addEventListener('change', e => {
      switch (e.target.value) {
          case "Popularité" :
              sortPopular(medias);
              break;
          case "Date" :
              sortDate(medias);
              break;
          case "Titre" :
              sortTitle(medias);
          default:
      }
  })
};

function sortPopular(medias) {
  medias.sort(function(a, b) {
      if (a.likes < b.likes) {
          return 1;
      }
      if (a.likes > b.likes) {
          return -1;
      }
      return 0;
  });
  mediaSection.innerHTML = "";
  displayPhotographerSelectedMedias(medias);  
};

function sortTitle(medias) {
  medias.sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
      }
      return 0;
  });
  mediaSection.innerHTML = "";
  displayPhotographerSelectedMedias(medias);  
};

function sortDate(medias) {
  medias.sort(function(a,b) {
      if (a.date < b.date) {
          return -1;
      }
      if (a.date > b.date) {
          return 1;
      }
      return 0;
  });
  mediaSection.innerHTML = "";
  displayPhotographerSelectedMedias(medias);
};

  function addLikes(){
    const likes = document.querySelectorAll(".mediaLikesIcon");// je cible le span des coeurs
    const allLikesCount = document.getElementById("totalLikesCount");// je cible le total des likes dans le bandeau
    let liked = 0;

    likes.forEach(e => {

        //EVENEMENT AU CLICK
        e.addEventListener("click", function(){// au click sur l'element
            const likeCount = e.parentElement.children[0];//creation constante qui cible le nbre de like

            if ( liked === 0) {
                likeCount.textContent++;
                allLikesCount.textContent++;
                liked = 1;
            } else  {
                likeCount.textContent--;
                allLikesCount.textContent--;
                liked = 0;
            }
        });

        //EVENEMENT AU CLAVIER AVEC TOUCHE ENTREE
        e.addEventListener("keypress", function(){
            const likeCount = e.parentElement.children[1];
            
            if ( liked === 0) {
              likeCount.textContent =  likeCount+1;
              allLikesCount.textContent++;
              additionalLike = 1;
          } else  {
              likeCount.textContent =  media.likes;
              allLikesCount.textContent--;
              additionalLike = -1;
          }                
        });
    });
}



  
  getSelectedPhotographerData();
