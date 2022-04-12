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
        photographIntroduction.appendChild(profileName); // Est l'enfant du lien du profil
              
        const profileLocation = document.createElement( 'h3' ); // Création de la localisation du photographe
        profileLocation.textContent = `${city}, ${country}`; // On l'affiche sous forme de texte
        photographIntroduction.appendChild(profileLocation); // Est l'enfant du lien
              
        const profileQuote = document.createElement( 'p' ); // Création de la citation
        profileQuote.setAttribute('class', "quote");
        profileQuote.textContent = tagline; // On affiche sous forme de texte
        photographIntroduction.appendChild(profileQuote); // Est l'enfant du lien
      
        const profilePicture = document.createElement( 'img' ); // Création de la photo de profil
        profilePicture.setAttribute("src", `./assets/photographers/${portrait}`); // Définition de l'image
        profilePicture.setAttribute("alt", `${name}`); // Définition du nom de l'image
        photographIntroduction.appendChild(profilePicture); // Est l'enfant du lien du profil
        
        return (photographIntroduction);
    }

    return {name, portrait, city, country, city, tagline, getPhotographerCard }
      
}
  
// FONCTION POUR AFFICHER LE TRAVAIL DU PHOTOGRAPHE SELECTIONNE
function mediaFactory(media) {
    const { id, title, image, video, likes } = media;
    
    function getMediaCard() {
        const mediaCard = document.createElement('aside');
        const lightBoxBground = document.getElementById("lightBox"); 

        const mediaLink = document.createElement('a'); // Création du lien vers le profile du photographe
        mediaLink.setAttribute('onclick', `displayLightBox(${id})`)
        mediaLink.setAttribute('alt', 'agrandir l\'aperçu' )
        mediaCard.appendChild(mediaLink); // Définition du lien comme enfant du container

        const mediaFigcaption = document.createElement('figcaption');
        mediaFigcaption.setAttribute('class', "media-figcaption");
        mediaCard.appendChild(mediaFigcaption);

        const mediaName = document.createElement( 'h3' ); // Création du nom du profil
        mediaName.textContent = title; // on affiche le nom sous forme de texte
        mediaFigcaption.appendChild(mediaName); // est l'enfant du lien du profil

        const mediaLikesContainer = document.createElement('div');// container des likes (nombre + icone)
        mediaLikesContainer.setAttribute('class', 'mediaLikesContainer')
        mediaFigcaption.appendChild(mediaLikesContainer);

        const mediaLikesCount = document.createElement('span');
        mediaLikesCount.setAttribute('class', 'mediaLikes');
        mediaLikesCount.setAttribute = ('aria-label', 'likes')
        mediaLikesCount.textContent = likes;
        mediaLikesContainer.appendChild(mediaLikesCount);

        const mediaLikesIcon = document.createElement('i');
        mediaLikesIcon.setAttribute('class', 'fas fa-heart mediaLikesIcon');
        mediaLikesCount.setAttribute = ('aria-label', 'heart icon');
        mediaLikesContainer.appendChild(mediaLikesIcon);

        if(image) {

            const photographPicture = document.createElement('img');
            photographPicture.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
            photographPicture.setAttribute("data-id", `${id}`);
            photographPicture.setAttribute("alt", `${title}`);
            mediaLink.appendChild(photographPicture);

            const imgLightbox = document.createElement('img');
            imgLightbox.setAttribute('class', 'lightbox-img');
            imgLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
            imgLightbox.setAttribute("data-id", `${id}`);
            imgLightbox.setAttribute("alt", `${title}`);
            lightBoxBground.appendChild(imgLightbox);

        } else if(video) {

            const photographVideo = document.createElement('video');
            photographVideo.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
            photographVideo.setAttribute("data-id", `${id}`);
            photographVideo.setAttribute("alt", `${title}`);
            mediaLink.appendChild(photographVideo);

            const videoLightbox = document.createElement('video');
            videoLightbox.setAttribute('class', 'lightbox-video');
            videoLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
            videoLightbox.setAttribute("data-id", `${id}`);
            videoLightbox.setAttribute("alt", `${title}`);
            lightBoxBground.appendChild(videoLightbox);

        }

        return mediaCard;
    }

    return { id, title, image, video, likes, getMediaCard }
}