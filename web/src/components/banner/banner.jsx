import React from "react";
import Header from "../header/Header"

const Banner = ({ title, text, img }) => {
  return (
    <div className={`w-full overflow-hidden h-screen ${img} bg-center bg-cover flex items-center`}>
      <Header />
      <div className="w-full max-w-7xl m-auto flex items-center gap-2 p-2">
          <div className='w-full max-w-2xl gap-10 rounded-md p-4 flex flex-col justify-evenly'>
            <h1 className='text-3xl text-white font-semibold before:absolute before:w-16 before:h-1 before:bg-[#FCFC30] before:left-0 before:-top-3 relative'>{title}</h1>
            <p className='text-lg text-white h-full flex items-center'>{text}</p>
            <div className='gap-10 flex items-center'>
              <button className='w-44 h-10 font-semibold text-black text-sm rounded-full bg-[#FCFC30]'>CONTRATAR</button>
              <button className='w-44 h-10 font-semibold text-black text-sm rounded-full bg-[#7B8CFF]'>TESTAR</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;
