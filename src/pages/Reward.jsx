import React from "react";
import HeroSection from "../components/reward/HeroSection";
import CreateAccount from "../components/reward/CreateAccount";
import Carousel from "../components/reward/Carousel";
import Perks from "../components/reward/Perks";
import PaymentMethods from "../components/reward/PaymentMethods";
import RewardBanner from "../components/reward/RewardBanner";

const Reward = () => {
  return (
    <>
      <div className="font-extrabold mt-0 sticky top-0 z-50 text-md w-full bg-[#1e3932] py-3 pl-32 text-white">
        STARBUCKS REWARDS
      </div>
      <HeroSection />
      <CreateAccount />
      <Carousel />
      <Perks />
      <PaymentMethods />
      <RewardBanner />
    </>
  );
};

export default Reward;
