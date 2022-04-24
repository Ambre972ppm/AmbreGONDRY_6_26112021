// FONCTION POUR AFFICHER L'IDENTITE DU PHOTOGRAPHE SELECTIONNE
function photographerCardFactory(photographer) {
    const { name, portrait, city, country, tagline, price } = photographer;
   
    function getPhotographerCard() {
        const dailyRate = document.getElementById("photographer-daily-rate");
        dailyRate.innerHTML = `<p>${price}€ / jour </p>`

        const modaleTitle = document.querySelector('.photographer_name'); 
        modaleTitle.textContent = name; // Affiche le nom du photographe dans la modale de contact

        const photographIntroduction = document.getElementById('photograph-introduction');

        const profileName = document.createElement( 'h2' ); // Création du nom du profil
        profileName.textContent = name; // On affiche le nom sous forme de texte
        profileName.setAttribute("tabindex", 0);
        photographIntroduction.appendChild(profileName); // Est l'enfant du lien du profil
              
        const profileLocation = document.createElement( 'h3' ); // Création de la localisation du photographe
        profileLocation.textContent = `${city}, ${country}`; // On l'affiche sous forme de texte
        profileLocation.setAttribute("tabindex", 0);
        photographIntroduction.appendChild(profileLocation); // Est l'enfant du lien
              
        const profileQuote = document.createElement( 'p' ); // Création de la citation
        profileQuote.setAttribute('class', "quote");
        profileQuote.textContent = tagline; // On affiche sous forme de texte
        profileQuote.setAttribute("tabindex", 0);
        photographIntroduction.appendChild(profileQuote); // Est l'enfant du lien
      
        const profilePicture = document.createElement( 'img' ); // Création de la photo de profil
        profilePicture.setAttribute("src", `./assets/photographers/${portrait}`); // Définition de l'image
        profilePicture.setAttribute("alt", `${name}`); // Définition du nom de l'image
        profilePicture.setAttribute("tabindex", 0);
        photographIntroduction.appendChild(profilePicture); // Est l'enfant du lien du profil
        
        return (photographIntroduction);
    }

    return {getPhotographerCard}
      
}
  
// FONCTION POUR AFFICHER LE TRAVAIL DU PHOTOGRAPHE SELECTIONNE
function mediaFactory(media) {
    const { id, title, image, video, likes } = media;
    const mediaUrl = `./assets/medias/${photographerSelectedId}/${image||video}`;
    
    function getMediaCard() {
        const mediaCard = document.createElement('article');
        const mediaLink = document.createElement('a'); // Création du lien vers le profile du photographe
        mediaLink.setAttribute('onClick', `displayLightBox(${id})`);
        mediaLink.setAttribute('alt', 'agrandir l\'aperçu' );
        mediaLink.setAttribute("tabindex", 0);
        mediaCard.appendChild(mediaLink); // Définition du lien comme enfant du container

        const mediaFigcaption = document.createElement('figcaption');
        mediaFigcaption.setAttribute('class', "media-figcaption");
        mediaCard.appendChild(mediaFigcaption);

        const mediaName = document.createElement( 'h3' ); // Création du nom du profil
        mediaName.textContent = title; // on affiche le nom sous forme de texte
        mediaName.setAttribute("tabindex", 0);
        mediaFigcaption.appendChild(mediaName); // est l'enfant du lien du profil

        const mediaLikesContainer = document.createElement('div');// container des likes (nombre + icone)
        mediaLikesContainer.setAttribute('class', 'mediaLikesContainer');
        mediaLikesContainer.setAttribute("tabindex", 0);
        mediaFigcaption.appendChild(mediaLikesContainer);

        const mediaLikesCount = document.createElement('span');
        mediaLikesCount.setAttribute('class', 'mediaLikes');
        mediaLikesCount.setAttribute = ('aria-label', 'likes')
        mediaLikesCount.textContent = likes;
        mediaLikesContainer.appendChild(mediaLikesCount);

        const mediaLikesIcon = document.createElement('i');
        mediaLikesIcon.setAttribute('class', 'fas fa-heart mediaLikesIcon');
        mediaLikesIcon.setAttribute = ('aria-label', 'heart icon');
        mediaLikesContainer.appendChild(mediaLikesIcon);

        if(image) {

            const photographPicture = document.createElement('img');
            photographPicture.setAttribute("src", `${mediaUrl}`);
            photographPicture.setAttribute("data-id", `${id}`);
            photographPicture.setAttribute("alt", `${title}`);
            photographPicture.setAttribute('class', 'photographer-media');
            photographPicture.setAttribute("tabindex", 0);
            mediaLink.appendChild(photographPicture);
            
        } else if(video) {

            const photographVideo = document.createElement('video');
            photographVideo.setAttribute("src", `${mediaUrl}`);
            photographVideo.setAttribute("data-id", `${id}`);
            photographVideo.setAttribute("alt", `${title}`);
            photographVideo.setAttribute('class', 'photographer-media');
            photographVideo.setAttribute("tabindex", 0);
            mediaLink.appendChild(photographVideo);

        }
            return mediaCard;
    }

    return {getMediaCard}

}