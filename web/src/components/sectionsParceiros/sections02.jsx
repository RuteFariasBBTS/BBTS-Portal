import React from "react";

const Sections02 = () => {
  const cardStyle = {
    width: "500px", // largura 
    height: "700px", // Altura fixa de 700px
    margin: "0 auto", // Centraliza horizontalmente
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.20)",
    boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset",
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Alinhar conteúdo verticalmente ao centro
    position: "relative", // Adicionar posicionamento relativo
  };

  const svgStyle = {
    width: "100%",
    height: "auto", // Altura automática para manter a proporção
    flexShrink: 0,
    fill: "rgba(252, 252, 48, 0.50)",
    position: "absolute",
    top: 0,
  };

  const cardContent = [
    {
      title: "Parceria Comercial",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
    },
    {
      title: "Parceria Tecnologia",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
    },
    {
      title: "Cooperação Técnica",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
    },
  ];

  return (
    <div className="w-full p-4 md:p-10 bg-[hsl(204,100%,15%)]">
      <h2 className="text-center text-[#ffffff] text-4xl font-semibold mb-20">
        Tipos de Parcerias
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {cardContent.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 rounded-md text-center flex-shrink-0"
            style={cardStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="496"
              height="200"
              viewBox="0 0 496 200"
              fill="none"
              style={svgStyle}
            >
              <path
                d="M19.1357 0.156387C8.12352 0.148744 -0.954928 9.07906 0.362196 20.0122C5.81271 65.2551 30.6039 107.262 71.387 140.032C118.085 177.555 181.568 198.821 247.871 199.151C314.174 199.482 377.867 178.85 424.936 141.795C466.019 109.453 489.871 66.0873 495.448 20.5158C496.794 9.51838 487.712 0.474192 476.633 0.466855L248.862 0.315834L19.1357 0.156387Z"
                fill="#FCFC30"
                fillOpacity="0.5"
              />
            </svg>
            <h3 className="text-[#f8f7f7] text-2xl font-semibold mt-20 mb-40">
              {card.title}
            </h3>
            <p className="text-[#ffffff] mb-20">{card.text}</p>
            <ul className="text-[#f8f7f7] mt-2">
              {card.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections02;
