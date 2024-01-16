import Banner from '../../components/banner/banner';
import userCog from '../../assets/images/userCog.png'
import map from '../../assets/images/map.png'
import manage_search from '../../assets/images/manage_search.png'
import Group from '../../assets/images/Group_11105-removebg-preview 1.png'
import Footer from '../../components/footer/Footer';

const ServicosGerenciados = () => {

  const bannerimg = "bg-[url('../assets/images/gerenciados.png')]"
  return (
    <>
       <div className='bg-[#002D4B]'>
        <Banner 
            title='Centro de Operações (SOC)' 
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt corrupti voluptate amet qui. Adipisci porro qui sed saepe eaque eos pariatur sequi, beatae cumque, temporibus voluptatem, earum ea dolor?' 
            img={bannerimg}
        />
        </div>
        <div className='w-full p-2 md:p-10 bg-[#002D4B] '>
          <div className='w-full max-w-5xl m-auto rounded-3xl h-full min-h-screen bg-[#F2F2F2] bg-opacity-50'>
            <div className='w-full h-full min-h-screen max-w-2xl p-4 flex flex-col justify-center items-center m-auto '>
                <h1 className='text-center text-[#002D4B] text-3xl font-semibold'>Centro de Operações(SOC)</h1>
                <p className='text-[#002D4B] py-10'>
                Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit <br/>
                ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit <br/>
                ametipsum dolor sit ametipsum dolor sit.</p>
                <h1 className='text-center text-[#002D4B] text-3xl font-semibold pb-10'>O que vamos lhe entregar</h1>
                <div className='flex items-stretch h-full flex-wrap min-h-[180px] gap-10 pb-10'>
                  <div className='flex-1 rounded-lg min-w-[180px] bg-[#D9D9D9] flex items-center flex-col p-2 text-center justify-center'>
                    <img src={userCog} alt="" className='w-16 h-16 object-contain' />
                    <p className='text-[#002D4B]'>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit</p>
                  </div>
                  <div className='flex-1 rounded-lg min-w-[180px] bg-[#D9D9D9] flex items-center flex-col p-2 text-center justify-center'>
                    <img src={map} alt="" className='w-16 h-16 object-contain' />
                    <p className='text-[#002D4B]'>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit</p>
                  </div>
                  <div className='flex-1 rounded-lg min-w-[180px] bg-[#D9D9D9] flex items-center flex-col p-2 text-center justify-center'>
                    <img src={manage_search} alt="" className='w-16 h-16 object-contain' />
                    <p className='text-[#002D4B]'>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit</p>
                  </div>
                </div>
            </div>

            <div className='h-full min-h-screen bg-[#143E59] w-full flex items-center'>
              <div className='w-full max-w-2xl m-auto'>
                <h1 className='text-center text-white pb-14 text-3xl font-semibold'>Como funciona a implementação?</h1>
                <img src={Group} alt="" className='w-full h-full object-cover' />
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
          
        </div>
        <div className="p-5 bg-[url('../assets/images/bgsolicite.png')] bg-center bg-cover w-full">
          <div className="w-full max-w-5xl m-auto flex p-5 justify-between">
            <h1 className="text-2xl font-semibold text-white">Solicite uma demonstração</h1>
            <button className="px-5 py-2 rounded-md bg-gray-200 text-black">Solicitar</button>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default ServicosGerenciados