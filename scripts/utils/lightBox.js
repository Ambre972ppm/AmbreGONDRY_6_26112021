//AFFICHER LA LIGHTBOX
function displayLightBox(mediaStr) {
  const lightBoxBground = document.getElementById("lightbox");
  lightBoxBground.style.display = "block";
  const media = JSON.parse(mediaStr);
  let currentMedia = media;
  console.log(media)

  //TODO passer en current media le media sur lequel on clique
    try {
        const { id, title, image, video } = media;
        const imageLightbox = document.querySelector(".lightbox__img");
        const videoLightbox = document.querySelector(".lightbox__video");
        const titleLightbox = document.querySelector(".lightbox__title");        

        if (image && image !== "") {
            imageLightbox.style.display= "block";
            imageLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
            imageLightbox.setAttribute("data-id", `${id}`);
            imageLightbox.setAttribute("alt", `${title}`);
            imageLightbox.setAttribute("tabindex", 0);
            titleLightbox.textContent = title;
            titleLightbox.setAttribute("tabindex", 0);
            videoLightbox.style.display = "none";

        } else if (video && video !== "") {
            videoLightbox.style.display= "block";
            videoLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
            videoLightbox.setAttribute("data-id", `${id}`);
            videoLightbox.setAttribute("alt", `${title}`);
            videoLightbox.setAttribute("tabindex", 0);
            titleLightbox.textContent = title;
            titleLightbox.setAttribute("tabindex", 0);
            imageLightbox.style.display = "none";

        }
    } catch (error) {

    }
}

//fermer la modale lightbox
function closeLightBox() {
  const lightBoxBground = document.getElementById("lightbox");
  lightBoxBground.style.display = "none";
}

//fermer la modale lightbox à l'aide du clavier
window.addEventListener("keyup", (e) => {
  closeLightBoxWitdhKeyboard(e);
});

function closeLightBoxWitdhKeyboard(e) {
  if (
    (document.getElementById("lightbox").style.display =
      "block" && e.key === "Escape")
  ) {
    closeLightBox();
  }
}

//Changer de média
function mediaLightbox() {
  // let mediaGallery = [];
  // const medias = document.querySelectorAll(".lightbox__media");
  // mediaGallery.push(medias);

  // console.log(mediaGallery);

  }

function switchMedia() {
    mediaLightbox(mediaIndex += n);
}

function currentMedia() {
    mediaLightbox(mediaIndex = n);
}

