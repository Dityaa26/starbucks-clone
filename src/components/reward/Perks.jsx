import React from 'react'
import Steps from './Steps'

const heading = "Endless Extras";
const subheading = "Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee"

const steps = [
  {
    src: "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg",
    title: "Fun freebies",
    description:
      "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg",
    title: "Order and pay how you’d like",
    description:
      "Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores",
  },
  {
    src: "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg",
    title: "Get to free faster",
    description:
      "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.",
  },
];

const Perks = () => {
  return <Steps heading={heading} subheading={subheading} steps={steps} imgSize='w-24' />;
}

export default Perks