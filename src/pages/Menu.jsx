import React from 'react'
import Sidebar from '../components/menu/Sidebar';
import MainSection from '../components/menu/MainSection';
import { Outlet } from 'react-router-dom';

const menuList = ['Menu', 'Featured', 'Previous', 'Favorites']

const Menu = () => {
  return (
    <>
      <div className="mt-[3px] sticky top-0 text-md w-full bg-[#f9f9f9] border-b-[1px] py-3 pl-32 text-black">
        {
          menuList.map(btn => <button key={btn} className='focus:underline mr-8'>{btn}</button>)
        }
      </div>
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default Menu