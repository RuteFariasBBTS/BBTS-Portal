import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/Footer';
import shield from '../../assets/images/shieldtreinamento.png'
import laptop from '../../assets/images/imgtreinamento.png'

const ServicoTreinamento = () => {
    const bannerimg = "bg-[url('../assets/images/treinamento.png')]"
    return (
        <>
        <div className='bg-[#002D4B]'>
        <Banner
            img={bannerimg}
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt corrupti voluptate amet qui. Adipisci porro qui sed saepe eaque eos pariatur sequi, beatae cumque, temporibus voluptatem, earum ea dolor?'
            title='Treinamento de Segurança'
          />

        <div className='h-full min-h-screen m-auto mt-10 w-full max-w-6xl bg-[#F2F2F2] bg-opacity-50 rounded-xl'>

          <div className='w-full h-screen flex items-center justify-center p-5'>
              <div className='w-full max-w-2xl m-auto flex items-end justify-center flex-col gap-7 py-5'>
                <h1 className='text-3xl font-semibold text-[#002D4B]'>Treinamento de Segurança</h1>
                <p className='text-base text-[#002D4B] '>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor
                sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor
                sit ametipsum dolor sit ametipsum dolor sit. </p>
              </div>
          </div>

          <div className='w-full h-full min-h-screen flex items-center justify-center'>
            <div className='flex w-full gap-10 justify-center flex-wrap p-10 items-stretch h-full relative'>

              <div className='flex-1 min-w-[300px] flex items-center justify-center'>
                <img src={shield} className='w-4/5 h-4/5 object-contain' alt="" />
              </div>

              <div className='flex-1 min-w-[300px] flex flex-col justify-center'>
                <h1 className='text-2xl font-semibold text-[#002D4B] pb-5'>Desenvolvimento e customização</h1>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                
              </div>
            
            </div>
          </div>

          <div className='w-full h-full min-h-screen flex items-center justify-center'>
            <div className='flex w-full gap-10 justify-center flex-wrap-reverse p-10 items-stretch h-full relative'>

              <div className='flex-1 min-w-[300px] flex flex-col justify-center'>
                <h1 className='text-2xl font-semibold text-[#002D4B] pb-5'>Serviços Gerenciados</h1>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
                <p className='text-[#002D4B] text-base mb-4'>Lorem ipsum dolor sit ametipsum sit amet ipsum dolor sit ametipsum dolor sit.</p>
              </div>

              <div className='flex-1 min-w-[300px] flex items-center justify-center'>
                <img src={laptop} className='w-full h-full object-contain' alt="" />
              </div>
            
            </div>
          </div>

          <div className='h-full min-h-screen w-full max-w-3xl m-auto flex items-center p-4'>
              <div>         
              <h1 className='text-center text-[#002D4B] text-3xl font-semibold py-10'>Nossos Planos</h1>
              <div className='flex items-stretch h-full flex-wrap min-h-[400px] gap-6'>

                <div className='flex-1 flex flex-col'>
                    <div className='flex-1 rounded-t-xl min-w-[180px] bg-[#D9D9D9] p-2 text-center'>
                      <h1 className='text-2xl font-semibold text-[#002D4B] pb-6'>Iniciante</h1>
                      <h1 className='font-bold text-2xl text-black leading-5'>R$ 250,00</h1>
                      <p className='text-base pb-5 font-semibold'>todo mês</p>
                      <p className='pb-5'>Sou um slogan para esse plano</p>
                      <p className='pb-5'>Válido por 12 meses</p>
                      <button className='border-[1px] border-[#002D4B] rounded-full px-4 py-1'>Contratar</button>
                    </div>
                    <div className='bg-[#D9D9D9] w-full rounded-b-xl border-t-2 border-[#002D4B] p-2'>
                        <ul className='list-disc flex items-center justify-center flex-col'>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                        </ul>
                    </div>
                </div>

                <div className='flex-1 flex flex-col'>
                    <div className='flex-1 rounded-t-xl min-w-[180px] bg-[#D9D9D9] p-2 text-center'>
                      <h1 className='text-2xl font-semibold text-[#002D4B] pb-6'>Iniciante</h1>
                      <h1 className='font-bold text-2xl text-black leading-5'>R$ 550,00</h1>
                      <p className='text-base pb-5 font-semibold'>todo mês</p>
                      <p className='pb-5'>Sou um slogan para esse plano</p>
                      <p className='pb-5'>Válido por 12 meses</p>
                      <button className='border-[1px] border-[#002D4B] rounded-full px-4 py-1'>Contratar</button>
                    </div>
                    <div className='bg-[#D9D9D9] w-full rounded-b-xl border-t-2 border-[#002D4B] p-2'>
                        <ul className='list-disc flex items-center justify-center flex-col'>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                        </ul>
                    </div>
                </div>

                <div className='flex-1 flex flex-col'>
                    <div className='flex-1 rounded-t-xl min-w-[180px] bg-[#D9D9D9] p-2 text-center'>
                      <h1 className='text-2xl font-semibold text-[#002D4B] pb-6'>Iniciante</h1>
                      <h1 className='font-bold text-2xl text-black leading-5'>R$ 700,00</h1>
                      <p className='text-base pb-5 font-semibold'>todo mês</p>
                      <p className='pb-5'>Sou um slogan para esse plano</p>
                      <p className='pb-5'>Válido por 12 meses</p>
                      <button className='border-[1px] border-[#002D4B] rounded-full px-4 py-1'>Contratar</button>
                    </div>
                    <div className='bg-[#D9D9D9] w-full rounded-b-xl border-t-2 border-[#002D4B] p-2'>
                        <ul className='list-disc flex items-center justify-center flex-col'>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                          <li className=''>Sou um benefício</li>
                        </ul>
                    </div>
                </div>

                    
                </div>
                  
              </div>
              
            </div>

        </div>

      

        <div className="p-5 bg-[url('../assets/images/bgsolicite.png')] bg-center bg-cover w-full my-5 ">
          <div className="w-full max-w-5xl m-auto flex items-center p-5 justify-between h-40">
            <h1 className="text-2xl font-semibold text-white">Solicite uma demonstração</h1>
            <button className="px-5 py-2 rounded-md bg-gray-200 text-black">Solicitar</button>
          </div>
        </div>
        <Footer/>
        </div>
        </>
    )
}

export default ServicoTreinamento