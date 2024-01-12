import React from "react";
import vantagensParceiro from "../../assets/images/vantagensParceiro.png";

const Sections03 = () => {
  return (
    <div className="h-70 bg-[#002d4b] w-full flex items-center">
      <div className="w-70 m-auto">
        <img
          src={vantagensParceiro}
          alt="Esquemas com Vantagens de ser parceiro da BBTS: Empresa com reconhecimento de mercado, suporte de qualidade, integração de tecnologias, desenvolvimento e inovação e Multissoluções tecnológicas"
          className="w-full h-full object-cover"

        />
      </div>
    </div>
  );
};

export default Sections03;
