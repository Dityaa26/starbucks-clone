import React from 'react'
import cardData from '../utils/cardData.json'
import { useNavigate } from 'react-router-dom';

const GiftCardList = () => {
    const navigate = useNavigate()
    const cards = cardData.categories;
    // console.log(cards)
  return (
    <div className="w-10/12 mx-auto no-scrollbar">
      {cards.map((card) => (
        <div key={card.urn} className="mt-8">
          <h1 className="mb-18 font-bold text-md">
            {card.names.long.toUpperCase()}
          </h1>
          <div className="py-4 flex overflow-x-scroll mb-6 pt-8 no-scrollbar">
            {card.cards.giftCards.map((gc) => (
              <img
                key={gc.productNumber}
                src={gc.assets[0].uri}
                alt="card"
                className="w-64 mr-8 overflow-y-visible rounded-lg shadow-sm shadow-slate-700 hover:-translate-y-[8px] duration-300"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GiftCardList