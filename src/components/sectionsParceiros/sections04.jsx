import React from 'react'
import bancobrasil from '../../assets/images/bancobrasil.png'
import bmc from '../../assets/images/bmc.png'
import vmware from '../../assets/images/vmware.png'
import aws from '../../assets/images/aws.png'
import oracle from '../../assets/images/oracle.png'

const Sections04 = () => {

    const Parceiros = [
        { img: bancobrasil },
        { img: bmc },
        { img: vmware },
        { img: aws },
        { img: oracle },
    ]

    return (
        <div className="w-full relative h-full min-h-screen flex flex-col ">
            <div className="w-full max-w-6xl m-auto flex flex-col gap-10  p-2">
                <h1 className='text-center text-[#ffffff] text-4xl font-semibold '> Nossos Parceiros </h1>
                <div className='flex w-full flex-wrap gap-2 max-w-lg justify-between m-auto pb-10 '>
                    <img className='flex-1 max-w-[500px] min-w-[170px] object-contain mb-20' src={bancobrasil} alt="" />
                    <img className='flex-1 max-w-[500px] min-w-[170px] object-contain mb-21' src={bmc} alt="" />
                </div>
                <div className='flex w-full flex-wrap gap-2 max-w-3xl justify-between m-auto '>
                    <img className='flex-1 max-w-[500px] min-w-[170px] object-contain mb-20' src={vmware} alt="" />
                    <img className='flex-1  max-w-[500px] min-w-[170px] object-contain mb-20' src={aws} alt="" />
                    <img className='flex-1  max-w-[500px] min-w-[170px] object-contain mb-20' src={oracle} alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default Sections04