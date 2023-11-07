import React, { useEffect, useState } from 'react'
import useMenuCard from '../../hooks/useMenuCard'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const menuCard = useMenuCard();


  return !menuCard ? (
    <div className="bg-gray-100 ml-32 m-10 rounded-lg p-20 w-2/12 h-screen"></div>
  ) : (
    <div className="ml-32">
      {menuCard.map((menu) => (
        <div key={menu.id}>
          <h1 className="text-xl mt-12 font-semibold mb-6 text-[rgba(0,0,0,.9)]">
            {menu.name}
          </h1>
          {menu.children.map((item) => (
            <p
              key={item.id}
              className="mb-3 font-semibold text-[rgba(0,0,0,.6)]"
            >
              <Link to={`/menu/${menu.id}/${item.id}`}>{item.name}</Link>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar