import React from 'react'
import Header from '../header/Header'

const Section01 = () => {
  return (
    <div className="w-full relative h-screen bg-[url('../assets/images/bghome.png')] bg-cover flex items-center">
      <Header />
      <div className="w-full max-w-7xl m-auto flex items-center gap-2 snap-center p-2">
          <div className='w-full max-w-2xl h-[50vh] rounded-md p-4 flex flex-col justify-evenly'>
            <h1 className='text-3xl text-white font-semibold before:absolute before:w-16 before:h-1 before:bg-[#FCFC30] before:left-0 before:-top-3 relative'>Sobre a BBTS CPSSEC</h1>
            <p className='text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis 
            adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non.
            At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
            <div className='gap-10 flex items-center'>
              <button className='w-44 h-10 font-semibold text-black text-sm rounded-full bg-[#FCFC30]'>CONTRATAR</button>
              <button className='w-44 h-10 font-semibold text-black text-sm rounded-full bg-[#7B8CFF]'>TESTAR</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Section01