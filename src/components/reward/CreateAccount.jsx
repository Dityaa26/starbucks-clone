import React from 'react'
import Steps from './Steps';
import { createAccountSteps } from '../utils/constants';


const heading = "Getting started is easy";
const subheading = " Earn Stars and get rewarded in a few easy steps";


const CreateAccount = () => {
  return (
    <Steps
      heading={heading}
      subheading={subheading}
      steps={createAccountSteps}
    />
  );
}

export default CreateAccount