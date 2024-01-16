import React from 'react';
import CarouselConteudos from '../carousel/CarouselConteudos';

const SectionCont02 = () => {
    return (
        <div className="w-full relative h-full min-h-screen flex flex-col">
            <div className="w-full max-w-6xl m-auto flex flex-col gap-10 p-2">
                <h1 className='text-3xl text-white font-semibold text-left w-full'>Destaques</h1>
                <CarouselConteudos />
            </div>
        </div>
    );
}

export default SectionCont02;
