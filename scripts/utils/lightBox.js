//launch contact modal
function displayLightBox(id) {
    const lightBoxBground = document.getElementById("lightBox");
	lightBoxBground.style.display = "block";
}

//close contact modal
function closeLightBox() {
    const lightBoxBground = document.getElementById("lightBox");
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