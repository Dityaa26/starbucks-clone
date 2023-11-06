import React from 'react'

const Steps = ({heading, subheading, steps}) => {
  return (
    <div className="my-20">
      <h1 className="text-center text-3xl font-semibold mb-6 text-[rgba(0,0,0,.9)]">
        {heading}
      </h1>
      <p className="text-center mb-10 font-semibold text-[rgba(0,0,0,.8)]">
        {subheading}
      </p>
      <div className="flex px-20">
        {steps.map((step) => (
          <div key={step.src} className="w-1/3 flex flex-col items-center px-4">
            <img src={step.src} alt="" className="w-24" />
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

export default Steps