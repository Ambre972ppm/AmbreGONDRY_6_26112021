const photographerSelectedId = new URLSearchParams(window.location.search).get("id"); // récupération de l'id du photographe selectionné dans l'Url
const mediaSection = document.getElementById("photograph-medias");

// Récupération des données dans le fichier JSON
function getSelectedPhotographerData() {
    fetch(`data/photographers.json`)
      .then((res) => res.json())
      .then((value) => {
        photographers = value.photographers;
        medias = value.media;

        displayPhotographerSelected(photographers); // on appelle la fonction qui affiche la carte du photographe sélectionné
        sortPopular(medias); // on affiche le tri des médias par défaut par popularité
      })
  }

//Affichage de la carte photographe sélectionné
  function displayPhotographerSelected(photographers) {
    photographers.find((photographer) => { // On retrouve notre photographe parmi la liste de photographe à l'aide de son id
      if(photographer.id == photographerSelectedId) {
        const photographerModel = photographerCardFactory(photographer);
        photographerModel.getPhotographerCard();
      }
    });
  };

//Affichage des médias du photographe sélectionné
  function displayPhotographerSelectedMedias(medias) {
    const allLikes = document.getElementById("photographer-total-like");
    const allLikesCount = document.createElement('span');
    allLikesCount.setAttribute('id', 'totalLikesCount');
    allLikes.appendChild(allLikesCount);
    let totalLikes = 0;

    medias.forEach((media) => {
      if(media.photographerId == photographerSelectedId) {
        const mediaModel = mediaFactory(media);
        const mediaCard = mediaModel.getMediaCard();
        mediaSection.appendChild(mediaCard);

        totalLikes += parseInt(media.likes);
      }
    })
    addLikes(totalLikes);
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
  sortMedias(medias);
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


  function addLikes(totalLikes){
    const likes = document.querySelectorAll(".mediaLikesIcon");// je cible le span des coeurs
    const allLikesCount = document.getElementById("totalLikesCount");// je cible le total des likes dans le bandeau
    allLikesCount.innerHTML = totalLikes + `<i class="fas fa-heart"></i>`;

    let liked = 0;

    likes.forEach((like) => {
      //EVENEMENT AU CLICK
      like.addEventListener("click", function(){// au click sur l'element
        const likeCount = like.parentElement.children[0];//creation constante qui cible le nbre de like

        if ( liked === 0 ) {
            likeCount.textContent++;
            allLikesCount.innerHTML = `${totalLikes+ 1}<i class="fas fa-heart"></i>`;
            liked = 1;
        } else  {
            likeCount.textContent--
            allLikesCount.innerHTML = `${totalLikes- 0}<i class="fas fa-heart"></i>`;
            liked = 0;
        }
     });

      //EVENEMENT AU CLAVIER AVEC TOUCHE ENTREE
      like.addEventListener("keypress", function(){
          const likeCount = like.parentElement.children[1];

          if ( liked === 0 ) {
            likeCount.textContent++;
            allLikesCount.textContent++;
            liked = 1;
        } else  {
            likeCount.textContent--;
            allLikesCount.textContent--;
            liked = 0;
        }
      });
    })
    
  }
 

  getSelectedPhotographerData();
