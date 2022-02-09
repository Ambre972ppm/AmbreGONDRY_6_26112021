// fonction pour afficher l'identité du photographe séléctionné
function photographerCardFactory(photographer) {
    const { name, portrait, city, country, tagline } = photographer;
   
    function getPhotographerCard() {
        const photographIntroduction = document.getElementById('photograph-introduction');

        const profileName = document.createElement( 'h2' ); // création du nom du profil
        profileName.textContent = name; // on affiche le nom sous forme de texte
        photographIntroduction.appendChild(profileName); // est l'enfant du lien du profil
              
        const profileLocation = document.createElement( 'h3' ); // création de la localisation du photographe
        profileLocation.textContent = `${city}, ${country}`; // on l'affiche sous forme de texte
        photographIntroduction.appendChild(profileLocation); // est l'enfant du lien
              
        const profileQuote = document.createElement( 'p' ); // création de la citation
        profileQuote.setAttribute('class', "quote");
        profileQuote.textContent = tagline; // qu'on affiche sous forme de texte
        photographIntroduction.appendChild(profileQuote); // est l'enfant du lien
      
        const profilePicture = document.createElement( 'img' ); // création de la photo de profil
        profilePicture.setAttribute("src", `./assets/photographers/${portrait}`); // définition de l'image
        profilePicture.setAttribute("alt", `${name}`); // définition du nom de l'image
        photographIntroduction.appendChild(profilePicture); // est l'enfant du lien du profil
        
        return (photographIntroduction);
    }

    return {name, portrait, city, country, city, tagline, getPhotographerCard }
      
}
  
// fonction pour afficher le travail du photographe sélectionné
function mediaFactory(media) {
    const { id, title, image, video, likes } = media;
  
    function getMediaCard() {
        const mediaCard = document.createElement('aside');

        if(image) {
            
            const pictureLink = document.createElement('a'); // création du lien vers le profile du photographe
            pictureLink.setAttribute('href', `./assets/medias/${photographerSelectedId}/${image}`); // définition de l'url
            mediaCard.appendChild(pictureLink); // définition du lien comme enfant du container

            const photographPicture = document.createElement('img');
            photographPicture.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
            photographPicture.setAttribute("alt", `${title}`);
            pictureLink.appendChild(photographPicture);

            const pictureFigcaption = document.createElement('figcaption');
            pictureFigcaption.setAttribute('class', "picture-figcaption");
            mediaCard.appendChild(pictureFigcaption);

            const pictureName = document.createElement( 'h3' ); // création du nom du profil
            pictureName.textContent = title; // on affiche le nom sous forme de texte
            pictureFigcaption.appendChild(pictureName); // est l'enfant du lien du profil

            const pictureLikesCount = document.createElement('p');
            pictureLikesCount.textContent = `${likes}`;
            pictureFigcaption.appendChild(pictureLikesCount);

        } else if(video) {
            
            const videoLink = document.createElement('a'); // création du lien vers le profile du photographe
            videoLink.setAttribute('href', `./assets/medias/${photographerSelectedId}/${video}`); // définition de l'url
            mediaCard.appendChild(videoLink); // définition du lien comme enfant du container

            const photographVideo = document.createElement('video');
            photographVideo.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
            photographVideo.setAttribute("alt", `${title}`);
            videoLink.appendChild(photographVideo);

            const videoFigcaption = document.createElement('figcaption');
            videoFigcaption.setAttribute('class', "video-figcaption");
            mediaCard.appendChild(videoFigcaption);

            const videoName = document.createElement( 'h3' ); // création du nom du profil
            videoName.textContent = title; // on affiche le nom sous forme de texte
            videoFigcaption.appendChild(videoName); // est l'enfant du lien du profil

            const videoLikesCount = document.createElement('p');
            videoLikesCount.textContent = `${likes}`;
            videoFigcaption.appendChild(videoLikesCount);
        }

        return mediaCard;
    }

    return { id, title, image, video, likes, getMediaCard }
}
  