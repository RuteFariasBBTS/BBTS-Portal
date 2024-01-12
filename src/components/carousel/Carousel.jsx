import React, { useRef, useState, useEffect } from "react";
import cardCarousel from '../../assets/images/cardCarousel.png'

const Carousel = ({ products, Title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const carouselRef = useRef(null);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Função para calcular a quantidade de cards visíveis com base na largura da tela
  const calculateCardsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 640) {
      setCardsPerPage(3); // Mostra 3 cards por slide quando a largura é maior ou igual a 640px
    } else {
      setCardsPerPage(1); // Mostra 1 card por slide quando a largura é menor que 640px
    }
  };

  // Atualiza a quantidade de cards visíveis e o número total de páginas quando a janela é redimensionada
  useEffect(() => {
    calculateCardsPerPage();
    window.addEventListener("resize", calculateCardsPerPage);
    return () => {
      window.removeEventListener("resize", calculateCardsPerPage);
    };
  }, []);

  // Atualiza o número total de páginas com base na quantidade de produtos e cards por página
  useEffect(() => {
    setTotalPages(Math.ceil(products.length / cardsPerPage));
  }, [products.length, cardsPerPage]);

  // Função para navegar para a próxima página
  const scrollToNext = () => {
    if (currentPage < totalPages) {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  };

  // Função para navegar para a página anterior
  const scrollToPrev = () => {
    if (currentPage > 1) {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: -carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
        setCurrentPage((prevPage) => prevPage - 1);
      }
    }
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      if (carouselRef.current) {
        const offset = carouselRef.current.offsetWidth * (page - currentPage);
        carouselRef.current.scrollBy({
          left: offset,
          behavior: "smooth",
        });
        setCurrentPage(page);
      }
    }
  };

  const renderPaginationDots = () => {
    const dots = [];

    for (let i = 1; i <= totalPages; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`h-3 w-3 rounded-full mt-3 ${
            currentPage === i ? "bg-[#FCFC30]" : "border-2 bg-none border-white"
          }`}
        />
      );
    }

    return (
      <div className="flex gap-2">
        {dots}
      </div>
    );
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full flex items-center h-96">
          <div
            ref={carouselRef}
            className="noscrool h-full flex w-full max-w-4xl m-auto snap-x snap-mandatory overflow-x-auto gap-3"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 sm:w-[32%] relative rounded-md w-full snap-center overflow-hidden h-full bg-[#F2F2F2]`}
              >
                <img src={cardCarousel} alt="" className="h-1/2 w-full object-cover rounded-md" />
                <p className="p-1 text-sm text-gray-500">25 03 2023 / Pesquisas</p>
                <p className="px-2 text-base text-gray-600 leading-5">4G e Inteligência Artificial são as fronteiras de mudança tecnológica nos próximos
                três anos, aponta estudo da Tempest.</p>
                <div className="flex items-center justify-center my-3">
                  <button className="rounded-full px-4 py-1 text-[#FCFC30] bg-[#002D4B]">Saiba +</button>
                </div>
                <p className="w-full bg-gray-300 text-gray-100 absolute bottom-0 font-semibold pb-1 text-center">Lorem Inpsum Dolor Sit amet</p>
              </div>
            ))}
           
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-4 mt-2 max-md:hidden ">
          <button onClick={scrollToPrev} className={`w-5 h-5 text-white text-lg font-semibold ${currentPage === 1 ? "opacity-50 cursor-default" : "cursor-pointer"}`} disabled={currentPage === 1}>&lt;</button>
          {renderPaginationDots()} {/* Renderiza as bolinhas de paginação */}
          <button onClick={scrollToNext} className={`w-5 h-5 text-white text-lg font-semibold ${currentPage === totalPages ? "opacity-50 cursor-default" : "cursor-pointer"}`} disabled={currentPage === totalPages}>&gt;</button>
        </div>
        <div className="flex justify-center my-10">
          <button className=" bg-gray-300 text-black px-5 py-1 font-semibold rounded-full">Veja todos</button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
