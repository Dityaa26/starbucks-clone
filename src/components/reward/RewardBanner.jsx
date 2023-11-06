import React from 'react'

const RewardBanner = () => {
  return (
    <div className="relative h-[550px] flex flex-col items-center overflow-hidden">
      <img
        src="https://www.starbucks.com/app-assets/844262945b2a8b8cfb293156e2583872.png"
        alt="background"
      />
      <div className="absolute top-0 flex flex-col items-center bg-[#d4e9e2] w-11/12 h-5/6 mt-12 py-14">
        <h1 className="text-center text-3xl font-semibold mb-6 text-[rgba(0,0,0,.9)]">
          Keep the Rewards Coming
        </h1>
        <p className="text-center mb-10 w-2/5 font-semibold text-[rgba(0,0,0,.8)]">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
        <img
          src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png"
          alt="logo"
          className="w-52"
        />
        <p className="text-center mb-10 w-2/5 font-semibold text-[rgba(0,0,0,.8)]">
          Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn 1
          mile per $1* spent at Starbucks and double Stars on Delta travel days.
        </p>
        <button className="mb-3 text-lg bg-[#00754a] text-white hover:opacity-75 p-1 px-[14px] rounded-full font-semibold">
          Join Starbucks® Rewards
        </button>
      </div>
    </div>
  );
}

export default RewardBanner