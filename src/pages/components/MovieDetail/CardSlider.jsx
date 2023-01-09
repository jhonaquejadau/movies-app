import React from "react";

const CardSlider = ({ credits, imagePath }) => {
  const cardsData =
    credits &&
    credits.map((credit) => {
      return {
        image: imagePath.imageUrl("original", credit.profile_path),
        title: credit.name,
        description: credit.character,
      };
    });

  const cardContainer = (cards) => {
    return (
      cards &&
      cards
        .filter(
          (card) => card.image !== "https://image.tmdb.org/t/p/originalnull"
        )
        .map((card, index) => {
          return (
            <div
              key={index}
              className="card shadow text-black bg-white rounded"
            >
              <img src={card.image} alt={card.title} />
              <div className="flex flex-col items-center">
                <p className="font-bold">{card.title}</p>
                <p>{card.description}</p>
              </div>
            </div>
          );
        })
    );
  };

  return <div className="cards-container">{cardContainer(cardsData)}</div>;
};

export default CardSlider;
