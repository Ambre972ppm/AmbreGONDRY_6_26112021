// récupération des données
async function getPhotographers() {
        const res = await fetch('./data/photographers.json');
        const data = await res.json();
    
        const photographers = data.photographers;
    
        displayData(photographers);//on appelle la fonction qui nous permet d'afficher les photographes

    }

    async function displayData(photographers) { // affichages des cartes photographes
        const photographersSection = document.querySelector(".photographer_section"); 

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);

            return photographer;
        });

    };

    getPhotographers()
        