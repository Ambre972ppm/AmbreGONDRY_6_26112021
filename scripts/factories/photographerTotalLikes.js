function TotalLikesFactory(media) {
    const { id, photographerId, likes, price } = media;
  
    function getTotalLikesCard() {
      const totalLikesCard = document.createElement("aside");
     
      const totalLikesAndRate = document.createElement('p');
      totalLikesAndRate.setAttribute('id', "allPhotographerLike");
      totalLikesAndRate.innerHTML = `${likes} <i class="fas fa-heart full"></i>     ${price}€/jour`;
      totalLikesCard.appendChild(totalLikesAndRate);

      return totalLikesCard;
    }

    return { id, photographerId, likes, price, getTotalLikesCard }
  }
  