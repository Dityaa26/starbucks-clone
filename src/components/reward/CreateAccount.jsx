import React from 'react'
import Steps from './Steps';


const heading = "Getting started is easy";
const subheading = " Earn Stars and get rewarded in a few easy steps";

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
    <Steps
      heading={heading}
      subheading={subheading}
      steps={steps}
    />
  );
}

export default CreateAccount