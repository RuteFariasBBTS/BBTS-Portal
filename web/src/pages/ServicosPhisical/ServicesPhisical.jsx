import React, { useEffect } from "react";

// Importe os recursos necessários para a nova página
import bannerDb from "../../assets/data/bannerDb";
import Banner from "../../components/banner/banner";
import CardService from "../../components/cardService/CardService";
import shield from '../../assets/images/shield.png'
import cog from '../../assets/images/cog.png'
import camera from '../../assets/images/camera.png'
import alarme from '../../assets/images/alarme.png'
import alvo from '../../assets/images/alvo.png'
import computadorlupa from '../../assets/images/computadorlupa.png'
import Footer from '../../components/footer/Footer'

const ServicosPhisical = () => {
  const bannerData1 = bannerDb[1];
  useEffect(() => {
    window.scrollTo(0, 0); // Define a posição do scroll no topo da página
  }, []);

  // Atualize as imagens e links conforme necessário para a página "ServicosPhisical"
  const bannerimg = "bg-[url('../assets/images/bgPhisical.png')]"


  const Links = [
    {
      id: 1, // Adicione um ID único para cada item
      title: "BBTS Segurança Avançada",
      reverse: false,
      img: shield,
      link: "/servico-seguranca-avancada-PSIM"
    },
    {
      id: 2,
      title: "BBTS Abertura de Cofres",
      reverse: true,
      img: cog,
      link: "/servico-manutencao-equipamentos"
    },
    {
      id: 3,
      title: "BBTS Monitoramento Inteligente de Vídeo",
      reverse: false,
      img: camera,
      link: "/servicos-construcao"
    },
    {
      id: 4,
      title: "BBTS Monitoramento de Alarme de Intrusão",
      reverse: true,
      img: alarme,
      link: "/treinamento-seguranca-trabalho"
    },
    {
      id: 5,
      title: "BBTS Monitoramento de Rastreador de Ativos",
      reverse: false,
      img: alvo,
      link: "/treinamento-seguranca-trabalho"
    },
    {
      id: 6,
      title: "BBTS Monitoramento de AIoT",
      reverse: true,
      img: computadorlupa,
      link: "/treinamento-seguranca-trabalho"
    },
  ];
  
  return (
    <>
      <div className='bg-[#002D4B]'>
        <Banner title={bannerData1.title} text={bannerData1.text} img={bannerimg} />
      </div>
      <div className="h-full min-h-screen flex flex-col items-stretch bg-[#002D4B] gap-6 py-8 px-4 w-full">
        {Links.map((Link) => (
          <CardService key={Link.id} title={Link.title} link={Link.link} img={Link.img} reverse={Link.reverse} />
        ))}
      </div>
      <div className="p-5 bg-[url('../assets/images/bgsolicite.png')] bg-center bg-cover w-full">
        <div className="w-full max-w-5xl m-auto flex p-5 justify-between">
          <h1 className="text-2xl font-semibold text-white">Solicite um Orçamento</h1>
          <button className="px-5 py-2 rounded-md bg-gray-200 text-black">Solicitar</button>
        </div>
      </div>
      <Footer />
    </>
  );  
};

export default ServicosPhisical;
