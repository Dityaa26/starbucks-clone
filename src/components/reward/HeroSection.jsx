import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="relative z-0 overflow-hidden py-24">
        <img
          src="https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png"
          alt=""
          className="bg-[#d4e9e2] scale-[1.65]  overflow-hidden"
        />
        <div className="absolute mx-10 w-2/6 text-left top-1/4">
          <h1 className="mb-1 text-4xl font-semibold text-[rgba(0,0,0,.87)]">
            FREE COFFEE
          </h1>
          <h1 className="mb-5 text-4xl font-semibold text-[rgba(0,0,0,.87)]">
            IS A TAP AWAY
          </h1>

          <p className="text-xl mb-8 text-[rgba(0,0,0,.8)] font-semibold">
            Join now to start earning Rewards
          </p>
          <button className="mb-3 text-lg bg-[#00754a] text-white hover:opacity-75 p-1 px-[14px] rounded-full font-semibold">
            Join now
          </button>
          <p className="text-xl mb-8 text-[rgba(0,0,0,.8)] font-semibold">
            Or <span className='underline hover:no-underline cursor-pointer'>join in the app</span> for the best experience
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection