import React from 'react'

const items = [
  {
    title: "1 ★ per dollar",
    description: "Pay as you go",
    options: [
      {
        src: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png",
        title: "Scan and pay separately",
        description: "Use cash or credit/debit card at the register.",
      },
      {
        src: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png",
        title: "Save payment in the app",
        description:
          "Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.",
      },
    ],
  },
  {
    title: "2 ★ per dollar",
    description: "Add funds in the app",
    options: [
      {
        src: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png",
        title: "Preload",
        description:
          "To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.",
      },
      {
        src: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png",
        title: "Register your gift card",
        description:
          "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.",
      },
    ],
  },
];

const PaymentMethods = () => {
  return (
    <div className="mt-20 bg-[rgba(0,0,0,.05)] pt-12">
      <h1 className="text-center text-3xl font-semibold mb-6 text-[rgba(0,0,0,.9)]">
        Cash or card, you earn Stars
      </h1>
      <p className="text-center mb-20 font-semibold text-[rgba(0,0,0,.8)]">
        No matter how you pay, you can earn Stars with your morning coffee.
        Those Stars add up to (really delicious) Rewards.
      </p>
      {items.map((item) => (
        <div className="mx-10 mt-10 border-b-[1px] flex border-gray-300">
          <div className="w-1/4 text-left">
            <h1 className=" text-2xl font-semibold mb-2 text-[rgba(0,0,0,.9)]">
              {item.title}
            </h1>
            <p className=" mb-10 font-semibold text-[rgba(0,0,0,.8)]">
              {item.description}
            </p>
          </div>
          {item.options.map((option) => (
            <div className="w-1/3 mr-2 text-left flex border-box">
              <div className='mr-4'>
                <img src={option.src} alt="logo" className='min-w-[165px]'/>
              </div>

              <div>
                <h1 className=" text-xl font-semibold mb-3 text-[rgba(0,0,0,.9)]">
                  {option.title}
                </h1>
                <p className=" mb-10 font-semibold text-[rgba(0,0,0,.8)]">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PaymentMethods