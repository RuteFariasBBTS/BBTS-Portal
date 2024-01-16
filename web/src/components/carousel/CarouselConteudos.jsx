import React, { useState } from "react";
import exemploConteudos1 from '../../assets/images/exemploConteudos1.png';
import exemploConteudos2 from '../../assets/images/exemploConteudos2.png';
import exemploConteudos3 from '../../assets/images/exemploConteudos3.png';
import "./carousel.css"; // Importe o arquivo CSS

const data = [
    "16 de Fevereiro 2023",
    "11 de Maio de 2023",
    "17 de Outubro 2023",
];

const titulo = [
    "Lorem ",
    "Ipsum ",
    "Dolor",
];

const textData = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus 2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus 3",
];
const textCont = [
    "Continuação do texto aqui...1 ",
    "Continuação do texto aqui... 2",
    "Continuação do texto aqui... 3",
];

const CarouselConteudos = () => {
    const images = [exemploConteudos1, exemploConteudos2, exemploConteudos3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showContinuation, setShowContinuation] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
        setShowContinuation(false); // Feche a continuação ao trocar a imagem
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
        setShowContinuation(false); // Feche a continuação ao trocar a imagem
    };

    const toggleContinuation = () => {
        setShowContinuation(!showContinuation);
    };

    return (
        <div>
            <div className="container">
                <img
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="image"
                />
                <div className="buttons">
                    <button
                        onClick={prevImage}
                        className="button_esquerda"
                    >
                        {/* Deixe o conteúdo do botão em branco */}
                    </button>

                    <button
                        onClick={nextImage}
                        className="button_direita"
                    >
                        {/* Deixe o conteúdo do botão em branco */}
                    </button>
                </div>
            </div>
            <h1 className='text-base font-normal text-white p-5'>{titulo[currentImageIndex]}</h1>
            <p className='text-base font-normal text-white text-right p-3'>{data[currentImageIndex]}</p>
            <p className='text-base font-normal text-white p-3'>{textData[currentImageIndex]}</p>
            {showContinuation && (
                <p className='text-base font-normal text-white p-3'>
                     {textCont[currentImageIndex]}
                </p>
            )}
            <div className="flex  my-3">
                <button className='rounded-full font-semibold px-4 py-1 text-left text-[#002D4B] bg-[#D9D9D9]' onClick={toggleContinuation}>
                    Saiba +
                </button>
            </div>
            <div className='flex justify-center'>
                <button className='px-4 py-1 bg-[#D9D9D9] text-[#002D4B] font-semibold rounded-full w-40'>
                    Todas as notícias
                </button>
            </div>
        </div>
    );
};

export default CarouselConteudos;
