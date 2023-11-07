import React from 'react'
import useMenuCard from '../../hooks/useMenuCard'
import { Link } from 'react-router-dom';

const MainSection = () => {
  const menuCard = useMenuCard();
// console.log(menuCard)



  return !menuCard ? (
    <div className="bg-gray-100 m-10 rounded-lg p-20 w-10/12 h-screen"></div>
  ) : (
    <div className="ml-32">
      <h1 className="text-4xl mt-12 font-bold">Menu</h1>
      {menuCard.map((menu) => (
        <div key={menu.id}>
          <h1 className="text-3xl mt-12 border-b-2 w-5/6 pb-6 font-semibold mb-6 text-[rgba(0,0,0,.9)]">
            {menu.name}
          </h1>
          <div className="grid grid-cols-2">
            {menu.children.map((child) => (
              <div key={child.id} className="flex m-4 items-center">
                <img
                  src={
                    child?.products[0]?.assets?.masterImage?.uri ||
                    child?.children[0]?.products[0].assets?.masterImage?.uri
                  }
                  alt="logo"
                  className="w-32 rounded-full mr-4"
                />
                <p className="text-xl font-semibold text-[rgba(0,0,0,.9)]">
                  {child.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainSection