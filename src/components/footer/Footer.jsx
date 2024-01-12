import React from "react";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
 
  return (
  <div className="w-full bg-[#002D4B] flex flex-col items-end border-[#FCFC30] border-t-[2px]">
     <div className="w-full flex items-start justify-around max-w-6xl mx-auto py-3">
      <div className="flex flex-col justify-start">
        <h1 className="border-b-2 border-gray-400 text-gray-400 leading-6">Serviços</h1>
        <Link to='/servicos-cyber' className="text-gray-400 text-sm">Serviços Phisical</Link>
        <Link to='/servicos-cyber' className="text-gray-400 text-sm">Serviços Cyber</Link>
      </div>
      <h1 className="border-b-2 border-gray-400 text-gray-400 font-semibold">Conheça a BBTS</h1>
      <h1 className="border-b-2 border-gray-400 text-gray-400 font-semibold">Parceiros</h1>
      <h1 className="border-b-2 border-gray-400 text-gray-400 font-semibold">Conteúdos</h1>
      </div>
    <div className="w-full border-[#FCFC30] border-t-[1px]">
      <div className="w-full py-2 flex items-center justify-around max-w-6xl mx-auto">
        <img src={logo} alt="" className="w-48 object-cover" />
        <p className="text-base text-gray-500"> © BB Tecnologia e serviços 2023</p>
      </div>
    </div>
  </div>
  )
};

export default Footer;
