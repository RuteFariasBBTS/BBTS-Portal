import React from 'react'
import Header from '../header/Header'

const SectionCont01 = () => {
  return (
    <div className="w-full relative h-screen bg-[url('../assets/images/parceriasBanner.png')] bg-cover flex items-center">
      <Header />
      <div className="w-full max-w-7xl m-auto flex items-center gap-2 p-2">
          <div className='w-full max-w-2xl h-[50vh] rounded-md p-4 flex flex-col justify-evenly'>
            <h1 className='text-3xl text-white font-semibold before:absolute before:w-16 before:h-1 before:bg-[#FCFC30] before:left-0 before:-top-3 relative'>Conteúdos</h1>
            <p className='text-xl text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis 
            adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non.
            At donec egestas cras in libero pellentesque. Donec amet phasellusLorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis 
            adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non.
            At donec egestas cras in libero pellentesque. Donec amet phasellus</p>

          </div>
      </div>
    </div>
  )
}

export default SectionCont01