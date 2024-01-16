import React, { useEffect } from "react";

import bannerDb from "../../assets/data/bannerDb";
import Banner from "../../components/banner/banner";
import CardService from "../../components/cardService/CardService";
import shield from '../../assets/images/shield.png'
import cog from '../../assets/images/cog.png'
import predioicon from '../../assets/images/predioicon.png'
import chapeu from '../../assets/images/chapeu.png'
import Footer from '../../components/footer/Footer'

const ServicesCyber = () => {
  const bannerData1 = bannerDb[0];
  useEffect(() => {
    window.scrollTo(0, 0); // Define a posição do scroll no topo da página
  }, []);

  const bannerimg = "bg-[url('../assets/images/bgcyber.png')]"

  const Links = [
    {
      id:1,
      title: "Serviços Gerenciados de Segurança",
      reverse: false,
      img: cog,
      link: "/servicos-gerenciados-de-seguranca"
    },
    {
      id:2,
      title: "Serviço de Proteção Avançada de Segurança",
      reverse: true,
      img: shield,
      link: "/servico-de-protecao-avancada-de-seguranca"
    },
    {
      id:3,
      title: "Serviços de Infraestrutura de Segurança",
      reverse: false,
      img: predioicon,
      link: "/servicos-de-infraestrutura-de-seguranca"
    },
    {
      id:4,
      title: "Treinamento de Segurança",
      reverse: true,
      img: chapeu,
      link: "/treinamento-de-seguranca"
    },
  ];

  return (
    <>
      <div className='bg-[#002D4B]'>
        <Banner title={bannerData1.title} text={bannerData1.text} img={bannerimg} />
      </div>
      <div className="h-full min-h-screen flex flex-col items-stretch bg-[#002D4B] gap-6 py-5 px-10 w-full">
      {Links.map((Link) => (
          <CardService key={Link.id} title={Link.title} link={Link.link} img={Link.img} reverse={Link.reverse} />
        ))}
      </div>
      <div className="p-5 bg-[url('../assets/images/bgsolicite.png')] bg-center bg-cover w-full">
        <div className="w-full max-w-5xl m-auto flex p-10 justify-between">
          <h1 className="text-2xl font-semibold text-white">Solicite uma demonstração</h1>
          <button className="px-5 py-2 rounded-md bg-gray-200 text-black">Solicitar</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesCyber;
