import React from 'react'

const menuList = ['Menu', 'Featured', 'Previous', 'Favorites']

const Menu = () => {
  return (
    <>
      <div className="mt-[3px] sticky top-0 text-md w-full bg-[#f9f9f9] border-b-[1px] py-3 pl-32 text-black">
        {
          menuList.map(btn => <button key={btn} className='focus:underline mr-8'>{btn}</button>)
        }
      </div>
      <div>
        
      </div>
    </>
  );
}

export default Menu