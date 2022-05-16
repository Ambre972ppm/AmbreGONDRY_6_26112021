//AFFICHER LA LIGHTBOX
function openLightbox(id) {
  const lightBoxBground = document.getElementById("lightbox");
  let lightboxItems = document.getElementsByClassName("lightbox__item");

  lightBoxBground.style.display = "block";

  let currentMediaId = id;

  for (let media of lightboxItems) {
    if(media.id == currentMediaId) {
      media.style.display = "block";
      currentMedia = media;
      localStorage.setItem("currentMediaIndex", media.dataset.index);
    } else {
      media.style.display = "none";
    }
  };

  currentMedia.scrollIntoView();

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

function previousMedia() {
  let lightboxItems = document.getElementsByClassName("lightbox__item");
  let currentMediaIndex = localStorage.getItem("currentMediaIndex");
  let newCurrentMediaIndex = parseInt(currentMediaIndex) -1;

  if(newCurrentMediaIndex < 0) {
    newCurrentMediaIndex = lightboxItems.length -1;
  }

  localStorage.setItem("currentMediaIndex", newCurrentMediaIndex);
  switchMedia();
}

function nextMedia() {
  let lightboxItems = document.getElementsByClassName("lightbox__item");
  let currentMediaIndex = localStorage.getItem("currentMediaIndex");
  let newCurrentMediaIndex = parseInt(currentMediaIndex) +1;

  if(newCurrentMediaIndex >= lightboxItems.length) {
    newCurrentMediaIndex = 0;
  }

  localStorage.setItem("currentMediaIndex", newCurrentMediaIndex);
  switchMedia();
}

function switchMedia() {
  let lightboxItems = document.getElementsByClassName("lightbox__item");
  for (let media of lightboxItems) {
    if(media.dataset.index == localStorage.getItem("currentMediaIndex")) {
      media.style.display = "block";
      currentMedia = media;
    } else {
      media.style.display = "none";
    }
  };

  currentMedia.scrollIntoView();
}
