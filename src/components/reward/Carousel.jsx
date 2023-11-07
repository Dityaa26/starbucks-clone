import React, { useState } from "react";
import {carouselButtonList} from "../utils/constants"
import {carouselItems} from "../utils/constants";


const Carousel = () => {
  const [select, setSelet] = useState(0);
  // console.log(select);
  return (
    <div>
      <div className="bg-[#d3e8e154] drop-shadow shadow-md flex flex-col items-center pt-16 text-3xl text-[rgba(0,0,0,.9)] font-semibold">
        <h1>Get your favorites for free</h1>
        <div>
          {carouselButtonList.map((btn) => (
            <button
              className="p-4 px-6 box-border focus:border-b-4 border-[#00754a] cursor-pointer"
              key={btn.id}
              onClick={() => setSelet(btn.id)}
            >
              {btn.title}
              <span className="text-sm text-yellow-500">★</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#d4e9e2] w-full h-[300px]">
        <div className="flex p-4 py-8 items-center justify-center">
          <div className="w-2/8 mr-10 border-box my-auto">
            <img
              src={carouselItems[select].src}
              alt="photo"
              className="w-[400px] h-auto "
            />
          </div>
          <div className="w-[400px] h-4/5 mr-10 border-box my-auto">
            <h1 className="text-left text-3xl font-semibold min-h-1/2 mb-8 text-[rgba(0,0,0,.9)]">
              {carouselItems[select].title}
            </h1>
            <p className="text-left mb-10 mt-6 font-semibold text-[rgba(0,0,0,.8)]">
              {carouselItems[select].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
