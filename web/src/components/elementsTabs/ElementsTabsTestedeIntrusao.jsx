import React from 'react';

const ElementsTabsTestedeIntrusao = ({ title, text, planosItem }) => {
  return (
    <div className="px-8">
      <div className='w-full bg-[#F2F2F2] bg-opacity-50 flex justify-around rounded-t-xl items-center flex-wrap p-10'>
        <div className='min-w-[300px] h-full min-h-screen flex flex-col justify-around p-2'>
          <div className="w-full max-w-xl m-auto ">
            <h1 className="text-3xl font-semibold text-[#002D4B] text-right">{title}</h1>
            <p className="text-[#002D4B] text-lg py-10">{text}</p>
          </div>

        </div> {/* Feche esta div */}
      </div>
      <div className='h-full bg-[#F2F2F2] bg-opacity-50 min-h-screen w-full flex items-center p-4'>
        <div className='flex items-center justify-center w-full max-w-3xl m-auto'>
          <div className='w-full'>
            <h1 className='text-center text-[#002D4B] text-3xl font-semibold py-10'>Nossos Planos</h1>
            <div className='flex items-stretch h-full flex-wrap min-h-[400px] gap-6'>
              {planosItem.map((planosItem, index) => (
                <div className='flex-1 flex flex-col' key={index}>
                  <div className='flex-1 rounded-t-xl min-w-[180px] bg-[#D9D9D9] p-2 text-center'>
                    <h1 className='text-2xl font-semibold text-[#002D4B] pb-6'>{planosItem.title}</h1>
                    <h1 className='font-bold text-2xl text-black leading-5'>{planosItem.price}</h1>
                    <p className='text-base pb-5 font-semibold'>{planosItem.time}</p>
                    <p className='pb-5'>{planosItem.slogan}</p>
                    <p className='pb-5'>{planosItem.validTime}</p>
                    <button className='border-[1px] border-[#002D4B] rounded-full px-4 py-1'>Contratar</button>
                  </div>
                  <div className='bg-[#D9D9D9] w-full rounded-b-xl border-t-2 border-[#002D4B] p-2'>
                    <ul className='list-disc flex items-center justify-center flex-col'>
                      {planosItem.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=''>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementsTabsTestedeIntrusao;
