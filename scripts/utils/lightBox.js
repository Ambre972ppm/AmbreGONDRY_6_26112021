//launch contact modal
function displayLightBox() {
    const lightBoxBground = document.getElementById("lightbox");
	lightBoxBground.style.display = "block";
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
    if (document.getElementById("lightBox").style.display ="block" && e.key === "Escape") {
        closeLightBox();
    }
}

