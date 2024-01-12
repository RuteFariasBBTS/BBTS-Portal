import React from 'react'
import bancobrasil from '../../assets/images/bancobrasil.png'
import bmc from '../../assets/images/bmc.png'
import vmware from '../../assets/images/vmware.png'
import aws from '../../assets/images/aws.png'
import oracle from '../../assets/images/oracle.png'
import linkedin from '../../assets/images/linkedin.png'

const Section04 = () => {

    const Parceiros = [
        { img: bancobrasil },
        { img: bmc },
        { img: vmware },
        { img: aws },
        { img: oracle },
    ]

    return (
        <div className="w-full relative h-full min-h-screen flex flex-col snap-center">
            <div className="w-full max-w-6xl m-auto flex flex-col gap-10  p-2">
                <h1 className='text-2xl text-white font-semibold text-center w-full'> Parceiros</h1>
                <div className='flex w-full flex-wrap gap-2 max-w-lg justify-between m-auto pb-10 '>
                    <img className='flex-1 max-w-[200px] min-w-[170px] object-contain' src={bancobrasil} alt="" />
                    <img className='flex-1 max-w-[200px] min-w-[170px] object-contain' src={bmc} alt="" />
                </div>
                <div className='flex w-full flex-wrap gap-2 max-w-3xl justify-between m-auto '>
                    <img className='flex-1 max-w-[200px] min-w-[170px] object-contain' src={vmware} alt="" />
                    <img className='flex-1  max-w-[200px] min-w-[170px] object-contain' src={aws} alt="" />
                    <img className='flex-1  max-w-[200px] min-w-[170px] object-contain' src={oracle} alt="" />
                </div>
                
            </div>
            <img src={linkedin} alt="" className='h-[40vh] pt-10 object-cover object-center'/>
        </div>
    )
}

export default Section04