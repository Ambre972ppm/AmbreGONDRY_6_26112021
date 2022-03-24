// fonction pour afficher l'identité du photographe séléctionné
function photographerCardFactory(photographer) {
    const { name, portrait, city, country, tagline, price } = photographer;
   
    function getPhotographerCard() {
        const dailyRate = document.getElementById("photographer-daily-rate");
        dailyRate.innerHTML = `<p>${price}€ / jour </p>`

        const modaleTitle = document.querySelector('.photographer_name'); 
        modaleTitle.textContent = name; // affichage du nom du photographe dans la modale contacte

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
        const lightBoxBground = document.getElementById("lightBox"); 

        if(image) {
            
            const pictureLink = document.createElement('a'); // création du lien vers le profile du photographe
            pictureLink.setAttribute('onclick', `displayLightBox()`)
            pictureLink.setAttribute('alt', 'agrandir l\'aperçu de l\'image' )
            mediaCard.appendChild(pictureLink); // définition du lien comme enfant du container

            const photographPicture = document.createElement('img');
            photographPicture.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
            photographPicture.setAttribute("alt", `${title}`);
            pictureLink.appendChild(photographPicture);

            const imgLightbox = document.createElement('img');
            imgLightbox.setAttribute('class', 'lightbox__cover-img');
            imgLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
            imgLightbox.setAttribute("alt", `${title}`);
            lightBoxBground.appendChild(imgLightbox);

            const pictureFigcaption = document.createElement('figcaption');
            pictureFigcaption.setAttribute('class', "picture-figcaption");
            mediaCard.appendChild(pictureFigcaption);

            const pictureName = document.createElement( 'h3' ); // création du nom du profil
            pictureName.textContent = title; // on affiche le nom sous forme de texte
            pictureFigcaption.appendChild(pictureName); // est l'enfant du lien du profil

            const pictureLikesCount = document.createElement('p');
            pictureLikesCount.setAttribute('class', 'pictureLikes');
            pictureLikesCount.setAttribute = ('aria-label', 'likes')
            pictureLikesCount.innerHTML = `${likes} <i class="fas fa-heart full"></i>`;
            pictureFigcaption.appendChild(pictureLikesCount);

        } else if(video) {
            
            const videoLink = document.createElement('a'); // création du lien vers le profile du photographe
            videoLink.setAttribute('onclick', `displayLightBox()`); // définition de l'url
            videoLink.setAttribute('alt', 'agrandir l\'aperçu de l\'image' )
            mediaCard.appendChild(videoLink); // définition du lien comme enfant du container

            const photographVideo = document.createElement('video');
            photographVideo.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
            photographVideo.setAttribute("alt", `${title}`);
            videoLink.appendChild(photographVideo);

            const videoLightbox = document.createElement('video');
            videoLightbox.setAttribute('class', 'lightbox__cover-video');
            videoLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
            videoLightbox.setAttribute("alt", `${title}`);
            lightBoxBground.appendChild(videoLightbox);



            const videoFigcaption = document.createElement('figcaption');
            videoFigcaption.setAttribute('class', "video-figcaption");
            mediaCard.appendChild(videoFigcaption);

            const videoName = document.createElement( 'h3' ); // création du nom du profil
            videoName.textContent = title; // on affiche le nom sous forme de texte
            videoFigcaption.appendChild(videoName); // est l'enfant du lien du profil

            const videoLikesCount = document.createElement('p');
            videoLikesCount.setAttribute = ('aria-label', 'likes')
            videoLikesCount.setAttribute('class', 'videoLikes');
            videoLikesCount.innerHTML = `${likes} <i class="fas fa-heart full"></i>`;
            videoFigcaption.appendChild(videoLikesCount);
        }

        return mediaCard;
    }

    return { id, title, image, video, likes, getMediaCard }
}