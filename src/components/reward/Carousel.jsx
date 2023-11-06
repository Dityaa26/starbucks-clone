import React, { useState } from "react";

const buttonList = [
  {
    id: 0,
    title: 25,
  },
  {
    id: 1,
    title: 100,
  },
  {
    id: 2,
    title: 200,
  },
  {
    id: 3,
    title: 300,
  },
  {
    id: 4,
    title: 400,
  },
];

const items = [
  {
    src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png",
    title: "Customize your drink",
    description:
      "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png",
    title:
      "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
    description:
      "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
    title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    description:
      "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png",
    title: "Sandwich, protein box or at-home coffee",
    description:
      "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
    title: "Select Starbucks® merchandise",
    description:
      "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
  },
];

const Carousel = () => {
  const [select, setSelet] = useState(0);
  console.log(select);
  return (
    <div>
      <div className="bg-[#d3e8e154] drop-shadow shadow-md flex flex-col items-center pt-16 text-3xl text-[rgba(0,0,0,.9)] font-semibold">
        <h1>Get your favorites for free</h1>
        <div>
          {buttonList.map((btn) => (
            <button
              className="p-4 px-6 box-border focus:border-b-4 border-[#00754a] cursor-pointer"
              key={btn.id}
              onClick={() => setSelet(btn.id)}
            >
              {btn.title}
              <span className="text-xs text-yellow-500">★</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#d4e9e2] w-full h-[300px]">
        <div className="flex p-4 py-8 items-center justify-center">
          <div className="w-2/8 mr-10 border-box my-auto">
            <img
              src={items[select].src}
              alt="photo"
              className="w-[400px] h-auto "
            />
          </div>
          <div className="w-[400px] h-4/5 mr-10 border-box my-auto">
            <h1 className="text-left text-3xl font-semibold min-h-1/2 mb-8 text-[rgba(0,0,0,.9)]">
              {items[select].title}
            </h1>
            <p className="text-left mb-10 mt-6 font-semibold text-[rgba(0,0,0,.8)]">
              {items[select].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
