import React from 'react'
import { NavLink } from 'react-router-dom'

const CardService = ({title, link, img, reverse }) => {

  return (
    <>
        <NavLink className='w-full m-auto max-w-4xl' to={link}>
          <div className={`bg-[#889BA9] rounded-md py-4 px-4 flex justify-between items-center ${reverse ? 'flex-row-reverse' : 'flex' }`}>
            <h1 className='text-xl w-full max-w-sm px-10 font-semibold text-gray-800 pb-4'>{title}</h1>
            <div className={`w-full max-w-[128px] max-md:max-w-[98px] max-md:min-w-[98px] min-w-[128px] h-24 rounded-md ${reverse ? 'max-md:translate-x-3 translate-x-8 -translate-y-6' : 'max-md:-translate-x-3 -translate-x-8 -translate-y-6'} bg-[#40799F] shadow-md shadow-[#333]`}>
              <img src={img} alt="" className='object-contain w-full h-full p-3'/>
            </div>
          </div>
        </NavLink>
   </>
  )
};
export default CardService