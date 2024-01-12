import React, { useEffect, useState } from 'react';
import MenuService from '../../components/MenuService/MenuService';
import Banner from '../../components/banner/banner';
import ElementsTabs from '../../components/elementsTabs/ElementsTabs';
import ElementsTabsTestedeIntrusao from '../../components/elementsTabs/ElementsTabsTestedeIntrusao';
import img from '../../assets/images/cardcyber.png'
import relogio from '../../assets/images/relogio.png'
import magGrafic from '../../assets/images/magGrafic.png'
import users from '../../assets/images/users.png'
import documentolupa from '../../assets/images/documentolupa.png'
import cabeca from '../../assets/images/cabeca.png'
import gancho from '../../assets/images/gancho.png'
import Footer from '../../components/footer/Footer';

const ServicoSegurancaAvancada = () => {
  const [activeTabTitle, setActiveTabTitle] = useState('Análise de Vulnerabilidade');
  const [activeTabText, setActiveTabText] = useState('');
  const showOptions = true;
  const showDiferencial = true

  const analise = [
    { titleCard: 'Detecte Vulnerabilidades', textCard:'A equipe de CyberSecurity da BBTS utiliza métodos e ferramentas para identificação de vulnerabilidades em todo tipo de plataforma, rede, sistema ou aplicação.' },
    { titleCard: 'Categorização e a Análise', textCard:'Nessa etapa é aplicada a metodologia de gerenciamento de vulnerabilidades permitindo mensurar o real impacto e a probabilidade de exploração de uma vulnerabilidade.' },
    { titleCard: 'Mitigação ou Correção', textCard:'Baseado no processo de análise, é informado as formas de correção ou mitigação das vulnerabilidades e seus problemas apresentados, definindo uma agenda de correções de vulnerabilidades que otimize esforços e garanta ganhos rápidos.' },
  ];
  const diferencialItem = [
    {diferencialtext: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.'},
    {diferencialtext: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.'},
    {diferencialtext: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.'},
    {diferencialtext: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.'},
    {diferencialtext: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit.'},
  ] 
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

  const tabs = [
        {
          icon: magGrafic,
          title: 'Análise de Vulnerabilidade',
          textBanner: 'Texto da Análise de Vulnerabilidade Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabs 
            img={img} 
            diferencialItem={diferencialItem}
            planosItem={planosItem}
            options={analise} 
            showOptions={showOptions}
            showDiferencial={showDiferencial}
            title='Análise de Vulnerabilidade' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: relogio,
          title: 'Teste de Intrusão',
          textBanner: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao 
            img={img} 
            diferencialItem={diferencialItem}
            planosItem={planosItem}
            options={analise} 
            showOptions={showOptions}
            showDiferencial={showDiferencial}
            title='Teste de Intrusão' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: users,
          title: 'Red Team',
          textBanner: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao
            img={img} 
            diferencialItem={diferencialItem}
            planosItem={planosItem}
            options={analise} 
            showOptions={showOptions}
            showDiferencial={showDiferencial}
            title='Red Team' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: users,
          title: 'Blue Team',
          textBanner: 'Texto da Análise de Vulnerabilidade Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao 
            img={img} 
            diferencialItem={diferencialItem}
            planosItem={planosItem}
            options={analise} 
            showOptions={showOptions}
            showDiferencial={showDiferencial}
            title='Blue Team' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: documentolupa,
          title: ' Análise Forense e Coleta de Evidências',
          textBanner: 'Texto da Análise de Vulnerabilidade Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao 
            img={img} 
            diferencialItem={diferencialItem}
            planosItem={planosItem}
            options={analise} 
            showOptions={showOptions}
            showDiferencial={showDiferencial}
            title='Análise Forense e Coleta de Evidências' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: cabeca,
          title: 'Threat Intelligence',
          textBanner: 'Texto da Análise de Vulnerabilidade Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao 
            img={img} 
            diferencialItem={diferencialItem}
            planosItem={planosItem}
            options={analise} 
            showOptions={showOptions}
            showDiferencial={showDiferencial}
            title='Threat Intelligence' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
        {
          icon: gancho,
          title: 'Campanha de Phishing',
          textBanner: 'Texto da Análise de Vulnerabilidade Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit.',
          content: <ElementsTabsTestedeIntrusao 
            img={img} 
            diferencialItem={diferencialItem}
            planosItem={planosItem}
            options={analise} 
            showOptions={showOptions}
            showDiferencial={showDiferencial}
            title='Campanha de Phishing' 
            text='Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum tiir dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit. ' 
          />
        },
    ];

      const activeTabIndex = tabs.findIndex(tab => tab.title === activeTabTitle);
      useEffect(() => {
        setActiveTabText(tabs[activeTabIndex].textBanner);
      }, [activeTabIndex, tabs]);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const bannerimg = "bg-[url('../assets/images/segurancAvancada.png')]";
    
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

          <div className="p-5 bg-[url('../assets/images/bgsolicite.png')] bg-center bg-cover w-full my-5 ">
          <div className="w-full max-w-5xl m-auto flex items-center p-5 justify-between h-40">
            <h1 className="text-2xl font-semibold text-white">Solicite uma demonstração</h1>
            <button className="px-5 py-2 rounded-md bg-gray-200 text-black">Solicitar</button>
          </div>
        </div>
        <Footer/>

        </div>
      );
}

export default ServicoSegurancaAvancada