// AFFICHER LES CARTES PHOTOGRAPHES
function photographerFactory(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `./assets/photographers/${portrait}`;
  const location = `${city}, ${country}`;
  const dailyRate =  `${price}€/jour`;
  // CREATION DE LA CARTE PHOTOGRAPHE
  function getUserCardDOM() {
    const photograherCard = document.createElement( 'aside' ); // Création du container du média

    const photographerLink = document.createElement('a'); // Création du lien vers le profile du photographe
    photographerLink.setAttribute('href', `./photographer.html?id=${id}`); 
    photograherCard.appendChild(photographerLink); 

    const profilePicture = document.createElement( 'img' ); // Création de la photo de profil
    profilePicture.setAttribute("src", picture); 
    profilePicture.setAttribute("alt", `voir la page du photographe ${name}`); 
    profilePicture.setAttribute("tabindex", 0);
    photographerLink.appendChild(profilePicture); 

    const profileName = document.createElement( 'h2' ); // Création du nom du profil
    profileName.textContent = name; 
    profileName.setAttribute("tabindex", 0);
    photographerLink.appendChild(profileName); 

    const profileLocation = document.createElement( 'h3' ); // Création de la localisation du photographe
    profileLocation.textContent = location; 
    profileLocation.setAttribute("tabindex", 0);
    photographerLink.appendChild(profileLocation); 

    const profileQuote = document.createElement( 'p' ); // Création de la citation
    profileQuote.setAttribute('class', "quote");
    profileQuote.textContent = tagline; 
    profileQuote.setAttribute("tabindex", 0);
    photographerLink.appendChild(profileQuote);

    const profileRate = document.createElement( 'p' ); // Création du tarif
    profileRate.setAttribute('class', "rate");
    profileRate.textContent = dailyRate; 
    profileRate.setAttribute("tabindex", 0);
    photographerLink.appendChild(profileRate); 

    return (photograherCard); // On retourne la carte du photographe
  }
  return { name, picture, tagline, location,  getUserCardDOM }
}