
//launch contact modal
function displayLightBox(media) {
    const { id, title, image, video } = media;
    const lightBoxBground = document.getElementById("lightbox");
    const imageLightbox = document.querySelector('.lightbox__img');
    const videoLightbox = document.querySelector('.lightbox__video');

    lightBoxBground.style.display = "block";

    if(image) {
        imageLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
        imageLightbox.setAttribute("data-id", `${id}`);
        imageLightbox.setAttribute("alt", `${title}`);
        imageLightbox.setAttribute("tabindex", 0);
        videoLightbox.style.display = "none";
    } 
    else if(video) {
    
        videoLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
        photographVideo.setAttribute("data-id", `${id}`);
        photographVideo.setAttribute("alt", `${title}`);
        photographVideo.setAttribute("tabindex", 0);
        imageLightbox.style.display = "none";
    }
}

//close contact modal
function closeLightBox() {
    const lightBoxBground = document.getElementById("lightbox");
    lightBoxBground.style.display = "none";
}

//close lightBox width keyboard
window.addEventListener('keyup', (e) => {
    closeLightBoxWitdhKeyboard(e);
})

function closeLightBoxWitdhKeyboard(e) {
    if (document.getElementById("lightbox").style.display ="block" && e.key === "Escape") {
        closeLightBox();
    }
}

