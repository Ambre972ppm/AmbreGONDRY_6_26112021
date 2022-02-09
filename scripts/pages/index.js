// récupération des données
async function getPhotographers() {
        const res = await fetch('./data/photographers.json');
        const data = await res.json();
    
        const photographers = data.photographers;
    
        //on appelle la fonction qui nous permet d'afficher les photographes
        displayData(photographers);
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section"); // on défini la section contenant les photographe

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);

            return photographer;
        });

    };

    getPhotographers()
        