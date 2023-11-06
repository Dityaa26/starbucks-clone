import React from 'react'
import { NavLink } from 'react-router-dom';

const links = ["MENU", "REWARD", "GIFT CARDS"];

const Header = () => {
  return (
    <>
      <div className="flex justify-between h-full z-50 bg-white py-6 px-10">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="logo"
            className="w-12 mr-10"
          />
          <NavLink
            to="/menu"
            className={({isActive}) =>
              `font-bold cursor-pointer hover:text-[#00754a] mr-6  decoration-[6px] ${
                isActive
                  ? "underline text-[#00754a] underline-offset-[37px]"
                  : ""
              }`
            }
          >
            MENU
          </NavLink>
          <NavLink
            to="/rewards"
            className={({isActive}) =>
              `font-bold cursor-pointer hover:text-[#00754a] mr-6  decoration-[6px] ${
                isActive
                  ? "underline text-[#00754a] underline-offset-[37px]"
                  : ""
              }`
            }
          >
            REWARDS
          </NavLink>
          <NavLink
            to="/gift"
            className={({isActive}) =>
              `font-bold cursor-pointer hover:text-[#00754a] mr-6  decoration-[6px] ${
                isActive
                  ? "underline text-[#00754a] underline-offset-[37px]"
                  : ""
              }`
            }
          >
            GIFT CARDS
          </NavLink>
        </div>
        <div className="flex items-center">
          <p className="mr-6 cursor-pointer font-semibold hover:text-[#00754a] text-gray-800">
            Find a store
          </p>
          <button className="ml-6 border text-gray-800 hover:bg-slate-200 border-black p-1 px-[14px] rounded-full font-semibold">
            Sign in
          </button>
          <button className="ml-6 bg-black text-white hover:opacity-75 p-1 px-[14px] rounded-full font-semibold">
            Join now
          </button>
        </div>
      </div>
      
    </>
  );
}

export default Header