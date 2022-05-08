//AFFICHER LA LIGHTBOX
function displayLightBox(mediaStr) {
  try {
    const media = JSON.parse(mediaStr);
    const { id, title, image, video } = media;
    const lightBoxBground = document.getElementById("lightbox");
    const imageLightbox = document.querySelector(".lightbox__img");
    const videoLightbox = document.querySelector(".lightbox__video");
    const titleLightbox = document.querySelector(".lightbox__title");

    lightBoxBground.style.display = "block";

    if (image && image !== "") {
      imageLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${image}`);
      imageLightbox.setAttribute("data-id", `${id}`);
      imageLightbox.setAttribute("alt", `${title}`);
      imageLightbox.setAttribute("tabindex", 0);
      titleLightbox.textContent = title;
      titleLightbox.setAttribute("tabindex", 0);
      videoLightbox.style.display = "none";

    } else if (video && video !== "") {
      videoLightbox.setAttribute("src", `./assets/medias/${photographerSelectedId}/${video}`);
      videoLightbox.setAttribute("data-id", `${id}`);
      videoLightbox.setAttribute("alt", `${title}`);
      videoLightbox.setAttribute("tabindex", 0);
      titleLightbox.textContent = title;
      titleLightbox.setAttribute("tabindex", 0);
      imageLightbox.style.display = "none";
    }
  } catch (error) {}
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
