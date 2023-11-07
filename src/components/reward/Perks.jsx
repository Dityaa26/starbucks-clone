import React from 'react'
import Steps from './Steps'
import { perksSteps } from '../utils/constants';

const heading = "Endless Extras";
const subheading = "Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee"



const Perks = () => {
  return <Steps heading={heading} subheading={subheading} steps={perksSteps} imgSize='w-24' />;
}

export default Perks