import React from 'react';
import diferencial from '../../assets/images/diferancial2.png';

const ElementsTabs = ({ diferencialItem, options, title, text, planosItem, showOptions, showfuncionamento, showDiferencial, funCards }) => {

  return (
    <div className="px-8">
      <div className='w-full bg-[#F2F2F2] bg-opacity-50 flex justify-around rounded-t-xl items-center flex-wrap p-10'>
        <div className='min-w-[300px] h-full min-h-screen flex flex-col justify-around p-2'>
          <div className="w-full max-w-xl m-auto">
            <h1 className="text-3xl font-semibold text-[#002D4B] text-right">{title}</h1>
            <p className="text-[#002D4B] text-lg py-10">{text}</p>
          </div>
          {showOptions && (
            <div className="flex flex-wrap w-full max-w-6xl justify-around gap-10 pb-10 px-10 max-md:px-4">
              {options.map((option, index) => (
                <div className='flex-1 min-w-[200px] border-2 flex flex-col gap-4 border-[#002D4B] bg-white bg-opacity-60 h-64 max-md:h-full rounded-2xl p-4' key={index}>
                  <div className="leading-5 text-lg font-semibold text-[#002D4B] border-l-2 border-[#002D4B] w-full max-w-[130px] pl-2">{option.titleCard}</div>
                  <div className="text-[15px] pl-2">{option.textCard}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showfuncionamento && (
        <div className='w-full flex items-center h-full min-h-screen bg-[#F2F2F2] bg-opacity-50'>
          <div className='w-full max-w-4xl m-auto p-5'>
            <h1 className='text-3xl font-semibold text-[#002D4B] w-full text-center pb-10'>Como funciona a implementação</h1>
            <div className='w-full items-center flex flex-wrap gap-10 justify-center p-8'>
              {funCards.map((funCard, index) => (
                <div
                  key={index}
                  className={`flex-1 min-w-[250px] h-48 p-7 ${index % 4 === 0
                      ? 'bg-[#002D4B]'
                      : index % 4 === 1 || index % 4 === 2
                        ? 'bg-white'
                        : 'bg-[#4A7EA0]'
                    }`}
                >
                  <div className={`${index % 4 === 0 ? 'text-white' : index % 4 === 1 || index % 4 === 2 ? 'text-[#002D4B]' : 'text-white'}`}>
                    <h1 className='text-lg font-semibold pb-4'>{funCard.title}</h1>
                    <p className='text-base'>{funCard.text}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      )}

    {showDiferencial && (
      <div className="flex justify-around items-stretch max-md:flex-col-reverse max-md:justify-center h-screen max-md:h-full max-md:min-h-screen bg-[#143D59] gap-10 pl-10">
        <div className="flex-1 flex justify-center flex-col">
          <h1 className="text-2xl font-semibold text-white text-left w-full pb-10">Nosso Diferencial</h1>
          <ul className="text-white text-base flex flex-col gap-4 list-disc px-4">
            {diferencialItem.map((diferencialItem, index) => (
              <li key={index}>{diferencialItem.diferencialtext}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <img src={diferencial} alt="" className='w-full h-full object-contain object-right max-md:object-center' />
        </div>
      </div>
       )}

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

export default ElementsTabs;
