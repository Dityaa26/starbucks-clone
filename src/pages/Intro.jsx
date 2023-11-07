import React from 'react'

const Intro = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  h-[calc(100vh-100px)]">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
        alt="logo"
        className="w-[550px] opacity-[0.08]"
      />
      <div className="absolute flex flex-col items-center">
        <h1 className="font-bold text-[#00754a] text-9xl">Starbucks Clone</h1>
        <p className="mt-8 text-2xl  font-semibold">
          Visit Different Pages From Header Menu
        </p>
      </div>
    </div>
  );
}

export default Intro