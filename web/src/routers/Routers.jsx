import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loading from '../components/skeletons/loading';

const Home = lazy(() => import('../pages/Home'));
const Parceiros = lazy(() => import('../pages/Parceiros'));
const Conteudos = lazy(() => import('../pages/Conteudos'));

const ServicosCyber = lazy(() => import('../pages/ServicosCyber/ServicesCyber'));
const ServicosGerenciados = lazy(() => import('../pages/ServicosCyber/servicosGerenciados'))
const ServicoSegurancaAvancada = lazy(() => import('../pages/ServicosCyber/servicoSegurancaAvancada'))
const ServicoInfra = lazy(() => import('../pages/ServicosCyber/servicoInfra'))
const ServicoTreinamento = lazy(() => import('../pages/ServicosCyber/servicoTreinamento'))

const ServicesPhisical = lazy(() => import('../pages/ServicosPhisical/ServicesPhisical'));
const ServicoSegurancaAvancadaPSIM = lazy(() => import('../pages/ServicosPhisical/ServicoSegurancaAvancadaPSIM'));
const AberturaCofres = lazy(() => import('../pages/ServicosPhisical/AberturaCofres'));
const MonitoramentoInteligenteVideo = lazy(() => import('../pages/ServicosPhisical/monitoramentoInteligenteVideo'));
const AlarmeIntrusao = lazy(() => import('../pages/ServicosPhisical/AlarmeIntrusao'));




const Routers = () => {
  const [isLoadingHome, setIsLoadingHome] = useState(true);
  const [isLoadingParceiros, setIsLoadingParceiros] = useState(true);
  const [isLoadingConteudos, setIsLoadingConteudos] = useState(true);

  const [isLoadingCyber, setIsLoadingCyber] = useState(true);
  const [isLoadingServicosGerenciadosDeSeguranca, setIsServicosGerenciadosDeSeguranca] = useState(true);
  const [isLoadingServicoDeProtecaoAvancadaDeSeguranca, setIsServicoDeProtecaoAvancadaDeSeguranca] = useState(true);
  const [isLoadingServicoInfra, setIsServicoInfra] = useState(true);
  const [isLoadingServicoTreinamento, setIsServicoTreinamento] = useState(true);

  const [isLoadingPhisical, setIsLoadingPhisical] = useState(true);
  const[isLoadingAvancada, setIsLoadingAvancada] = useState(true);
  const[isLoadingCofres, setIsLoadingCofres] = useState(true);
  const[isLoadingMonitoramento, setIsLoadingMonitoramento] = useState(true);
  const[isLoadingAlarmeIntrusao, setIsLoadingAlarmeIntrusao] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (location.pathname === '/home') {
        setIsLoadingHome(false);
      } else if (location.pathname === '/parceiros') {
        setIsLoadingParceiros(false);
      } else if (location.pathname === '/conteudos') {
        setIsLoadingConteudos(false);
      } else if (location.pathname === '/servicos-cyber') {
        setIsLoadingCyber(false);
      } else if (location.pathname === '/servicos-gerenciados-de-seguranca') {
        setIsServicosGerenciadosDeSeguranca(false);
      } else if (location.pathname === '/servico-de-protecao-avancada-de-seguranca') {
        setIsServicoDeProtecaoAvancadaDeSeguranca(false);
      } else if (location.pathname === '/servicos-de-infraestrutura-de-seguranca') {
        setIsServicoInfra(false);
      } else if (location.pathname === '/treinamento-de-seguranca') {
        setIsServicoTreinamento(false);
      }
        else if (location.pathname === '/servicos-phisical') {
        setIsLoadingPhisical(false);
      }
        else if (location.pathname === '/servico-seguranca-avancada-PSIM') {
        setIsLoadingAvancada(false);
      }
      else if (location.pathname === '/servico-manutencao-equipamentos') {
        setIsLoadingCofres(false);
      }
      else if (location.pathname === '/servicos-construcao') {
        setIsLoadingMonitoramento(false);
      }
      else if (location.pathname === '/treinamento-seguranca-trabalho') {
        setIsLoadingAlarmeIntrusao(false);
      }
      
    }, 2000);
    return () => clearTimeout(delay);
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to="home" />} />
        <Route
          path="home"
          element={<Suspense fallback={<Loading/>}>{isLoadingHome ? <Loading/> : <Home />}</Suspense>} />
        <Route
          path="parceiros"
          element={<Suspense fallback={<Loading/>}>{isLoadingParceiros ? <Loading/> : <Parceiros />}</Suspense>} />
        <Route
          path="conteudos"
          element={<Suspense fallback={<Loading/>}>{isLoadingConteudos ? <Loading/> : <Conteudos />}</Suspense>} />

        <Route
          path="servicos-cyber"
          element={<Suspense fallback={<Loading/>}>{isLoadingCyber ? <Loading/> : <ServicosCyber />}</Suspense>} />
        <Route
          path="servicos-gerenciados-de-seguranca"
          element={<Suspense fallback={<Loading/>}>{isLoadingServicosGerenciadosDeSeguranca ? <Loading/> : <ServicosGerenciados />}</Suspense>} />
        <Route
          path="servico-de-protecao-avancada-de-seguranca"
          element={<Suspense fallback={<Loading/>}>{isLoadingServicoDeProtecaoAvancadaDeSeguranca ? <Loading/> : <ServicoSegurancaAvancada />}</Suspense>} />
        <Route
          path="servicos-de-infraestrutura-de-seguranca"
          element={<Suspense fallback={<Loading/>}>{isLoadingServicoInfra? <Loading/> : <ServicoInfra />}</Suspense>} />
        <Route
          path="treinamento-de-seguranca"
          element={<Suspense fallback={<Loading/>}>{isLoadingServicoTreinamento ? <Loading/> : <ServicoTreinamento />}</Suspense>} />

        <Route
          path="servicos-phisical"
          element={<Suspense fallback={<Loading/>}>{isLoadingPhisical ? <Loading/> : <ServicesPhisical />}</Suspense>} />
        
        <Route
          path="servico-seguranca-avancada-PSIM"
          element={<Suspense fallback={<Loading/>}>{isLoadingAvancada ? <Loading/> : <ServicoSegurancaAvancadaPSIM />}</Suspense>} />
        
        <Route
          path="servico-manutencao-equipamentos"
          element={<Suspense fallback={<Loading/>}>{isLoadingCofres ? <Loading/> : <AberturaCofres />}</Suspense>} />

        <Route
          path="servicos-construcao"
          element={<Suspense fallback={<Loading/>}>{isLoadingMonitoramento ? <Loading/> : <MonitoramentoInteligenteVideo />}</Suspense>} />

        <Route
          path="treinamento-seguranca-trabalho"
          element={<Suspense fallback={<Loading/>}>{isLoadingAlarmeIntrusao ? <Loading/> : <AlarmeIntrusao />}</Suspense>} />

      
      </Routes>
    </Suspense>
  );
};

export default Routers;
