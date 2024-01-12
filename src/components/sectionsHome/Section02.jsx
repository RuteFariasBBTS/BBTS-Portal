import React from 'react'
import cardphisical from '../../assets/images/cardphisical.png'
import cardcyber from '../../assets/images/cardcyber.png'

const Section02 = () => {
    return (
        <div className="w-full relative h-full min-h-screen bg-cover flex items-center">
            <div className="w-full max-w-6xl m-auto flex flex-col items-center gap-10 snap-center p-2">
                <div className='w-full flex-wrap-reverse flex justify-between gap-2 items-center'>
                    <div className='flex-1 min-w-[310px] max-w-xl'>
                        <h1 className='text-2xl font-semibold text-white mb-2' >BBTS Physical Security</h1>
                        <p className='text-base font-normal text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore
                            et. Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                    </div>
                    <div className='flex-1  min-w-[310px] max-w-lg rounded-md overflow-hidden h-[35vh]'>
                        <img src={cardphisical} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-full flex-wrap flex justify-between gap-2 items-center'>
                <div className='flex-1  min-w-[310px] max-w-lg rounded-md overflow-hidden h-[35vh]'>
                        <img src={cardcyber} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex-1 min-w-[310px] max-w-xl'>
                        <h1 className='text-2xl font-semibold text-white mb-2' >BBTS Cyber Security</h1>
                        <p className='text-base font-normal text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore
                            et. Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section02