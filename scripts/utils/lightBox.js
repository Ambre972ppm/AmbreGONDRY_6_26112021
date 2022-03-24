//launch contact modal
function displayLightBox() {
    const lightBoxBground = document.getElementById("lightBox");
	lightBoxBground.style.display = "block";
}

//close contact modal
function closeLightBox() {
    const lightBoxBground = document.getElementById("lightBox");
    lightBoxBground.style.display = "none";
}

/** 
 * Ouverture et fermeture de la lightbox et sa navigation au clavier
**/
function openLightBox(el, medias) {
    const lightbox = document.querySelector(".lightBox");
    const lightBoxClose = document.querySelector(".lightbox__icon--close");
    const lightBoxNext = document.querySelector(".lightbox__icon--right");
    const lightBoxPrev = document.querySelector(".lightbox__icon--left");
    
    lightBoxClose.addEventListener("click", closeLightBox);
    lightBoxNext.addEventListener("click", setNextMedia);
    lightBoxPrev.addEventListener("click", setPrevMedia);
    
    lightBoxNext.addEventListener("keydown", (el) =>  {
        if (el.key == 'Enter') setNextMedia();
    });

    lightBoxPrev.addEventListener("keydown", (el) =>  {
        if (el.key == 'Enter') setPrevMedia();
    });

    lightBoxClose.addEventListener("keydown", (el) =>  {
        if (el.key == 'Enter') closeLightBox();
    });
    
   
function closeLightBox() {
    lightbox.style.display = "none";
    document.removeEventListener('keydown', kbNav);
  
}

/** 
 * Navagation au clavier
**/

    function kbNav(e) {
        if( e.key == 'ArrowRight') setNextMedia();
        if( e.key == 'ArrowLeft') setPrevMedia();
        if( e.key == 'Escape') closeLightBox();
       
    }
    

    const mediaId = el.target.getAttribute('data-id');
    let media = medias.find(el => el.id == mediaId);
    if (!mediaId) return
   
    displayLB(media);

    function setNextMedia() {

        const getmediaIndex = medias.indexOf(media);
        if (getmediaIndex === medias.length - 1) {
            media = medias[0];
        } else {
            media = medias[getmediaIndex + 1];
        }
        displayLB(media);
    }

    function setPrevMedia() {
        const getmediaIndex = medias.indexOf(media);
        if (getmediaIndex === 0) {
            media = medias[medias.length-1];
        } else {
            media = medias[getmediaIndex - 1];
        }
       
        displayLB(media);
      
    }
   
    lightbox.style.display = "block";
    document.addEventListener('keydown', kbNav, {passive:true} );
    lightbox.focus();
}

function displayLB(media) {
   
    const lightboxContainer = document.querySelector(".lightbox__container");
    let tmpl = document.querySelector(".lightbox__container");
    if (!media) return
  
    if (media.video !== undefined) {
        tmpl = `<figure>
        <video controls class="lightbox__cover">  
        <source  tabindex="0" src="assets/photos/${media.photographerId}/${media.video}"type="video/mp4" alt="${media.title}">
        </video>
        <figcaption class="lightbox__title" tabindex="0">${media.title}</figcaption>
        </figure>`;

    } else {
        tmpl = `<figure>
        <img class="lightbox__cover"  tabindex="0" src="assets/photos/${media.photographerId}/${media.image}" alt="${media.title}">
        <figcaption class="lightbox__title" tabindex="0">${media.title}</figcaption>
        </figure>`;
    }
   
   
    lightboxContainer.innerHTML = tmpl;   
}