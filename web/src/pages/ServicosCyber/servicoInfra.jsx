import React, { useEffect, useState } from 'react';
import MenuService from '../../components/MenuService/MenuService';
import Banner from '../../components/banner/banner';
import ElementsTabs from '../../components/elementsTabs/ElementsTabs';
import img from '../../assets/images/cardcyber.png'
import magGrafic from '../../assets/images/magGrafic.png'
import consultoria from '../../assets/images/consultoria.png'
import health_and_safety from '../../assets/images/health_and_safety.png'
import Footer from '../../components/footer/Footer';
import ElementsTabsTestedeIntrusao from '../../components/elementsTabs/ElementsTabsTestedeIntrusao';

const ServicoInfra = () => {
  const [activeTabTitle, setActiveTabTitle] = useState('Implementação');
  const [activeTabText, setActiveTabText] = useState('');
  const showOptions = false;
  const showfuncionamento = true;
  const showDiferencial = false;

  const planosItem = [
    {
      title: 'Iniciante',
      price: 'R$250,00',
      time: 'Todos mês',
      slogan: 'Um slogan para esse plano',
      validTime: 'Vãlido por 12 meses',
      benefits: ['Sou um benefício A', 'Sou um benefício A', 'Sou um benefício A'],
    },
    {
      title: ' Intermédiario',
      price: 'R$500,00',
      time: 'Todos mês',
      slogan: 'Um slogan para esse plano',
      validTime: 'Vãlido por 12 meses',
      benefits: ['Sou um benefício B', 'Sou um benefício B', 'Sou um benefício B'],
    },
    {
      title: 'Avançado',
      price: 'R$700,00',
      time: 'Todos mês',
      slogan: 'Um slogan para esse plano',
      validTime: 'Vãlido por 12 meses',
      benefits: ['Sou um benefício C', 'Sou um benefício C', 'Sou um benefício C'],
    },
  ];

  const funcionamento = [
    { title: '01- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
    { title: '02- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
    { title: '03- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
    { title: '04- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
  ];

  const tabs = [
        {
          icon: magGrafic,
          title: 'Implementação',
          textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabs 
            img={img} 
            planosItem={planosItem}
            showOptions={showOptions}
            funCards={funcionamento}
            showfuncionamento={showfuncionamento}
            showDiferencial={showDiferencial}
            title='Implementação' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: consultoria,
          title: 'Consultoria',
          textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao
            img={img} 
            planosItem={planosItem}
            showOptions={showOptions}
            funCards={funcionamento}
            showfuncionamento={showfuncionamento}
            showDiferencial={showDiferencial}
            title='Consultoria' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: health_and_safety,
          title: 'Health Check De Segurança',
          textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabs 
            img={img} 
            planosItem={planosItem}
            showOptions={showOptions}
            funCards={funcionamento}
            showfuncionamento={showfuncionamento}
            showDiferencial={showDiferencial}
            title='Health Check De Segurança' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
    ];

    const activeTabIndex = tabs.findIndex((tab) => tab.title === activeTabTitle);
    useEffect(() => {
      setActiveTabText(tabs[activeTabIndex].textBanner);
    }, [activeTabIndex, tabs]);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    const bannerimg = "bg-[url('../assets/images/infra.png')]";
    
    return (
      <div className='bg-[#002D4B]'>
        <Banner 
        img={bannerimg} 
        text={activeTabText} 
        title={activeTabTitle} 
        />
        <div className='w-full max-w-7xl m-auto'>
          <MenuService tabs={tabs} activeTabProp={activeTabIndex} setActiveTabTitle={setActiveTabTitle} />
        </div>
    
        <div className="p-5 bg-[url('../assets/images/bgsolicite.png')] bg-center bg-cover w-full my-5">
          <div className="w-full max-w-5xl m-auto flex items-center p-5 justify-between h-40">
            <h1 className="text-2xl font-semibold text-white">Solicite uma demonstração</h1>
            <button className="px-5 py-2 rounded-md bg-gray-200 text-black">Solicitar</button>
          </div>
        </div>
        <Footer />
      </div>
    );
    
}

export default ServicoInfra;