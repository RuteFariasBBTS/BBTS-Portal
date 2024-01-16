import React, { useEffect, useState } from 'react';
import MenuService from '../../components/MenuService/MenuService';
import Banner from '../../components/banner/banner';
import img from '../../assets/images/cardcyber.png'
import gerenciador from '../../assets/images/gerenciador.png'
import videoCameraFront from '../../assets/images/videoCameraFront.png'
import tratamentoDeEvento from '../../assets/images/tratamentoDeEvento.png'
import analytics from '../../assets/images/analytics.png'
import relatorioBasico from '../../assets/images/relatorioBasico.png'
import Footer from '../../components/footer/Footer';
import ElementsTabsTestedeIntrusao from '../../components/elementsTabs/ElementsTabsTestedeIntrusao';

const AlarmeIntrusao = () => {
  const [activeTabTitle, setActiveTabTitle] = useState('Gerenciamento de Cadastro e Acesso');
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

  const funcionamento = [ //não estamos usando esse codigo não consegui tirar daqui
    { title: '01- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
    { title: '02- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
    { title: '03- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
    { title: '04- Lorem ipsum dolor', text:'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.' },
  ];

  const tabs = [
        {
          icon: gerenciador,
          title: 'Gerenciamento de Cadastro e Acesso',
          textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao 
            img={img} 
            planosItem={planosItem}
            showOptions={showOptions}
            funCards={funcionamento}
            showfuncionamento={showfuncionamento}
            showDiferencial={showDiferencial}
            title='Gerenciamento de Cadastro e Acesso' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: videoCameraFront,
          title: 'Monitoramento de Streaming de Vídeo',
          textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao
            img={img} 
            planosItem={planosItem}
            showOptions={showOptions}
            funCards={funcionamento}
            showfuncionamento={showfuncionamento}
            showDiferencial={showDiferencial}
            title='Monitoramento de Streaming de Vídeo' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: tratamentoDeEvento,
          title: 'Tratamento de Eventos',
          textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao
            img={img} 
            planosItem={planosItem}
            showOptions={showOptions}
            funCards={funcionamento}
            showfuncionamento={showfuncionamento}
            showDiferencial={showDiferencial}
            title='Tratamento de Eventos' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
            icon: analytics,
            title: 'Inteligência Analítica de Dados',
            textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
            content: <ElementsTabsTestedeIntrusao
              img={img} 
              planosItem={planosItem}
              showOptions={showOptions}
              funCards={funcionamento}
              showfuncionamento={showfuncionamento}
              showDiferencial={showDiferencial}
              title='Inteligência Analítica de Dados' 
              text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
            />
          },
          {
            icon: relatorioBasico,
            title: 'Relatórios Básicos',
            textBanner: 'Texto da Implementação Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
            content: <ElementsTabsTestedeIntrusao
              img={img} 
              planosItem={planosItem}
              showOptions={showOptions}
              funCards={funcionamento}
              showfuncionamento={showfuncionamento}
              showDiferencial={showDiferencial}
              title='Relatórios Básicos' 
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

export default AlarmeIntrusao;