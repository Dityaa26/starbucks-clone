import React from 'react'

const links = [
  {
    title: "About Us",
    list: [
      "Our Company",
      "Our Coffee",
      "Stories and News",
      "Starbucks Archive",
      "Investor Relations",
    ],
  },
  {
    title: "Careers",
    list: [
      "Culture and Values",
      "Inclusion, Diversity, and Equity",
      "College Achievement Plan",
      "Alumni Community",
      "U.S. Careers",
    ],
  },
  {
    title: "Social Impact",
    list: ["People", "Planet", "Environmental and Social Impact Reporting"],
  },
  {
    title: "For Business Partners",
    list: [
      "Landlord Support Center",
      "Suppliers",
      "Corporate Gift Card Sales",
      "Office and Foodservice Coffee",
    ],
  },
  {
    title: "Order and Pick Up",
    list: [
      "Order on the App",
      "Order on the Web",
      "Delivery",
      "Order and Pick Up Options",
      "Explore and Find Coffee for Home",
    ],
  },
];

const last = ['Privacy Notice', 'Terms of Use', 'Do Not Share My Personal Information', 'CA Supply Chain Act', 'Cookie Preferences']

const Footer = () => {
  return (
    <div>
      <div className="flex w-5/6 mx-auto mt-16 border-b-2">
        {links.map((link) => (
          <div key={link.title} className="w-1/4 ml-4">
            <h1 className=" text-xl font-semibold mb-6 text-[rgba(0,0,0,.9)]">
              {link.title}
            </h1>
            {link.list.map((li) => (
              <p key={li} className="mb-2 mt-6 cursor-pointer hover:text-[rgba(0,0,0,.8)] font-semibold text-[rgba(0,0,0,.6)]">
                {li}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex w-5/6 mx-auto mt-8 mb-20">
        {last.map((lst) => (
          <span key={lst}>
            <span className="mb-2 mt-6 cursor-pointer mr-5 hover:text-[rgba(0,0,0,.8)] font-semibold text-[rgba(0,0,0,.6)]">
              {lst}
            </span>
            <span className='mr-5'>|</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Footer