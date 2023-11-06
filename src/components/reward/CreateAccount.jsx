import React from 'react'

const steps = [
  {
    src: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg",
    title: "Create an account",
    description:
      "To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg",
    title: "Order and pay how you’d like",
    description:
      "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg",
    title: "Earn Stars, get Rewards",
    description:
      "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!",
  },
];

const CreateAccount = () => {
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl font-semibold mb-6 text-[rgba(0,0,0,.9)]">
        Getting started is easy
      </h1>
      <p className="text-center mb-10 font-semibold text-[rgba(0,0,0,.8)]">
        Earn Stars and get rewarded in a few easy steps
      </p>
      <div className="flex px-20">
        {steps.map((step) => (
          <div key={step.src} className="w-1/3 flex flex-col items-center px-4">
            <img
              src={step.src}
              alt=""
              className="w-12"
            />
            <h1 className="text-xl font-semibold mt-6">{step.title}</h1>
            <p className="text-center mb-10 mt-6 font-semibold text-[rgba(0,0,0,.8)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateAccount