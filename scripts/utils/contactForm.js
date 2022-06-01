//launch contact modal
function displayModal() {
  const modalBground = document.getElementById("modal_bground");
  modalBground.style.display = "block";
  modalBground.focus();
}

//close contact modal
function closeModal() {
  const modalBground = document.getElementById("modal_bground");
  modalBground.style.display = "none";
}

//close contact modal width keyboard
window.addEventListener('keyup', (e) => {
  closeModalWitdhKeyboard(e);
})

function closeModalWitdhKeyboard(e) {
  if (document.getElementById("modal_bground").style.display ="block" && e.key === "Escape") {
    closeModal();
  }
}

// sends data filled in the form in the local storage and in the console
function submitForm() {
  const contactForm = document.getElementById("contact_modal-form");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    localStorage.setItem("contact", JSON.stringify(contact));
    console.log(firstName.value, lastName.value, email.value, message.value);

    closeModal();
  });
}

// submit width Keybord
function submitFormWitdhKeyboard(e) {
  if (document.getElementById("modal_bground").style.display ="block" && e.key === "Enter") {
    submitForm();
  }
}


