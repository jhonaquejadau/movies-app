import React from "react";

export const CardSlider = ({credits, imagePath}) => {
    
    const cardsData = credits && credits.map(credit => {
        return {
            image: imagePath.imageUrl('original',credit.profile_path),
            title: credit.name,
            description: credit.character
        }
    })

    const cardContainer = (cards) => {
        return cards && cards.map((card, index) => {
            return (
                <div key={index} 
                    className="card shadow text-black"
                >
                    <img src={card.image} alt={card.title}/>
                    <div className="flex flex-col items-center">
                        <p className="font-bold">{card.title}</p>
                        <p>{card.description}</p>
                    </div>
                </div>
            )
        })
    }
    
    return (
        <div className="cards-container">
            {cardContainer(cardsData)}
        </div>
    )
}