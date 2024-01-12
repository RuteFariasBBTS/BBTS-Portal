import React from 'react'
import shield from '../../assets/images/security.png'
import magnify from '../../assets/images/manage_search.png'
import predio from '../../assets/images/Vector.png'
import calendar from '../../assets/images/today.png'
import relogio from '../../assets/images/relogio.png'
import build from '../../assets/images/build.png'

const Section03 = () => {

    const bene = [
        {title: 'Segurança', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor  dunt ut abore et.', icon: shield},
        {title: 'Foco no Negócio', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor  dunt ut abore et.', icon: magnify},
        {title: 'Redução de Infraestrutura', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor  dunt ut abore et.', icon: predio},
        {title: 'Disponibilidade 24/7', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor  dunt ut abore et.', icon: calendar},
        {title: 'Redução de Custos', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor  dunt ut abore et.', icon: relogio},
        {title: 'Redução de Manutenção', text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor  dunt ut abore et.', icon: build},
    ]

    return (
        <div className="w-full relative h-full min-h-screen flex items-center">
            <div className="w-full max-w-6xl flex flex-col m-auto gap-2 snap-center p-2">
                    <h1 className='text-3xl text-white border-b-2 w-full'>Benefícios</h1>
                    <div className='grid grid-cols-2 gap-2 h-full max-md:grid-cols-1'>
                        {bene.map((bene) => 
                        <div className='flex items-center justify-center p-4'>
                            <div className='w-full bg-[#F2F2F2] relative h-40 rounded-lg p-2 px-4 flex justify-between'>
                                <div> 
                                    <h1 className='text-xl text-[#002D4B] font-semibold max-md:pb-1 pb-3'>{bene.title}</h1>
                                    <p className='text-lg text-[#002D4B] w-full max-w-sm'>{bene.text} </p>
                                </div>
                                <div className='w-20 h-20 max-md:hidden mt-4 before:h-16 before:w-16 mr-4 z-10 relative before:absolute before:bg-[#FCFC30B2] before:rounded-full before:-right-2 before:-top-3 before:-z-10'>
                                    <img src={bene.icon} alt="" className='w-full h-full object-contain ' />
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default Section03