//AFFICHER LA LIGHTBOX
function openLightbox(id) {
  const lightBoxBground = document.getElementById("lightbox");
  let lightboxItems = document.getElementsByClassName("lightbox__item");

  lightBoxBground.style.display = "block";
  lightBoxBground.focus();

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

  //appel les fonction au clavier
  window.addEventListener("keyup", (e) => {
    closeLightBoxWitdhKeyboard(e);
    previousMediaWidthKeybord(e);
    nextMediaWidthKeybord(e);
  });
}

//fermer la modale lightbox
// au clic
function closeLightBox() { 
  const lightBoxBground = document.getElementById("lightbox");
  lightBoxBground.style.display = "none";
}
// au clavier
document.getElementById('close-lightbox').addEventListener("keypress", () => {
  closeLightBox();
})

function closeLightBoxWitdhKeyboard(e) {
  if (
    (document.getElementById("lightbox").style.display =
      "block" && e.key === "Escape")
  ) {
    closeLightBox();
  }
}

//navigation au media précédent
// au clic
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
// au clavier
function previousMediaWidthKeybord(e) {
  if (
    (document.getElementById("lightbox").style.display =
      "block" && e.key === "ArrowLeft")
  ) {
    previousMedia();
  }
}

//navigation au media suivant
// au clic
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
// au clavier
function nextMediaWidthKeybord(e) {
  if (
    (document.getElementById("lightbox").style.display =
      "block" && e.key === "ArrowRight")
  ) {
    nextMedia();
  }
}

//Affiche seulement le média courant
function switchMedia() {
  let lightboxItems = document.getElementsByClassName("lightbox__item");
  let currentMediaIndex = localStorage.getItem("currentMediaIndex");

  for (let media of lightboxItems) {
    if(media.dataset.index == currentMediaIndex) {
      media.style.display = "block";
      currentMedia = media;
    } else {
      media.style.display = "none";
    }
  };

  currentMedia.scrollIntoView();
}
