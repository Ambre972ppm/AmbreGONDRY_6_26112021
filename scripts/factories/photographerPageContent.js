//AFFICHER L'IDENTITE DU PHOTOGRAPHE SELECTIONNE
function photographerCardFactory(photographer) {
  const { name, portrait, city, country, tagline, price } = photographer;
  //CREATION DE LA CARTE DU PHOTOGRAPHE
  function getPhotographerCard() {
    const dailyRate = document.getElementById("photographer-daily-rate");
    dailyRate.innerHTML = `<p>${price}€ / jour </p>`

    const modaleTitle = document.querySelector('.photographer_name'); 
    modaleTitle.textContent = name; // Affiche le nom du photographe dans la modale de contact

    const photographIntroduction = document.getElementById('photograph-introduction'); // On récupère le container pour l'introduction du photographe

    const profileName = document.createElement( 'h1' ); // Création du nom du profil
    profileName.textContent = name;
    profileName.setAttribute("tabindex", 0);
    photographIntroduction.appendChild(profileName);
              
    const profileLocation = document.createElement( 'h2' ); // Création de la localisation du photographe
    profileLocation.textContent = `${city}, ${country}`;
    profileLocation.setAttribute("tabindex", 0);
    photographIntroduction.appendChild(profileLocation);
              
    const profileQuote = document.createElement( 'p' ); // Création de la citation
    profileQuote.setAttribute('class', "quote");
    profileQuote.textContent = tagline;
    profileQuote.setAttribute("tabindex", 0);
    photographIntroduction.appendChild(profileQuote);
      
    const profilePicture = document.createElement( 'img' ); // Création de la photo de profil
    profilePicture.setAttribute("src", `./assets/photographers/${portrait}`);
    profilePicture.setAttribute("alt", `${name}`);
    profilePicture.setAttribute("tabindex", 0);
    photographIntroduction.appendChild(profilePicture);
        
    return (photographIntroduction); // On retourne l'entête du photographe
  }

  return {getPhotographerCard}
      
}
  
//AFFICHER LE TRAVAIL DU PHOTOGRAPHE SELECTIONNE
function mediaFactory(media) {
  const { id, title, image, video, likes } = media;
  const mediaUrl = `./assets/medias/${photographerSelectedId}/${image||video}`;
  //CREATION DE LA CARTE MEDIA
  function getMediaCard() {
    const mediaCard = document.createElement('article');
    const mediaLink = document.createElement('a');

    mediaLink.setAttribute('onclick', `displayLightBox('${JSON.stringify(media)}')`); // Appel de la fonction qui ouvre la lightbox
    mediaLink.setAttribute('alt', 'agrandir l\'aperçu' );
    mediaLink.setAttribute("tabindex", 0);
    mediaCard.appendChild(mediaLink); 

    const mediaFigcaption = document.createElement('figcaption'); // Création de la description du media
    mediaFigcaption.setAttribute('class', "media-figcaption");
    mediaCard.appendChild(mediaFigcaption);

    const mediaName = document.createElement( 'h2' ); // Création du nom du profil
    mediaName.textContent = title;
    mediaName.setAttribute("tabindex", 0);
    mediaFigcaption.appendChild(mediaName);

    const mediaLikesContainer = document.createElement('div'); // Création du container des likes (nombre + icone)
    mediaLikesContainer.setAttribute('class', 'mediaLikesContainer');
    mediaLikesContainer.setAttribute("tabindex", 0);
    mediaFigcaption.appendChild(mediaLikesContainer);

    const mediaLikesCount = document.createElement('span'); // Création du nombre de likes
    mediaLikesCount.setAttribute('class', 'mediaLikes');
    mediaLikesCount.setAttribute('aria-label', 'likes')
    mediaLikesCount.textContent = likes;
    mediaLikesContainer.appendChild(mediaLikesCount);

    const mediaLikesIcon = document.createElement('i'); // Création de l'icône de like
    mediaLikesIcon.classList.add('fas', 'fa-heart', 'mediaLikesIcon');
    mediaLikesIcon.setAttribute('aria-label', 'heart icon');
    mediaLikesIcon.setAttribute("tabindex", 0);
    mediaLikesContainer.appendChild(mediaLikesIcon);

    if(image) { // Si c'est une image 

      const photographPicture = document.createElement('img'); // Création de l'image
      photographPicture.setAttribute("src", `${mediaUrl}`);
      photographPicture.setAttribute("data-id", `${id}`);
      photographPicture.setAttribute("alt", `photo nommée ${title}`);
      photographPicture.setAttribute('class', 'photographer-media');
      photographPicture.setAttribute("tabindex", 0);
      mediaLink.appendChild(photographPicture);
            
    } else if(video) {

      const photographVideo = document.createElement('video'); // Création de la vidéo
      photographVideo.setAttribute("src", `${mediaUrl}`);
      photographVideo.setAttribute("data-id", `${id}`);
      photographVideo.setAttribute("alt", `vidéo nommée ${title}`);
      photographVideo.setAttribute('class', 'photographer-media');
      photographVideo.setAttribute("tabindex", 0);
      mediaLink.appendChild(photographVideo);

    }
    return mediaCard; // On retourne la carte du media
  }

  return {getMediaCard}

}