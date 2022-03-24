//launch contact modal
function displayModal() {
    const modalBground = document.getElementById("modal_bground");
	modalBground.style.display = "block";
}

//close contact modal
function closeModal() {
    const modalBground = document.getElementById("modal_bground");
    modalBground.style.display = "none";
}

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
