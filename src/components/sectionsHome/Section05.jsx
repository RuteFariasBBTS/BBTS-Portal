import React from 'react'
import Carousel from '../carousel/Carousel'

const Section05 = () => {
    const products = [
        {name: 'a'},
        {name: 'a'},
        {name: 'a'},
        {name: 'a'},
        {name: 'a'},
    ]
    return (
        <div className="w-full relative h-full min-h-screen flex flex-col snap-center">
            <div className="w-full max-w-6xl m-auto flex flex-col gap-10 p-2">
            <h1 className='text-2xl text-white font-semibold text-center w-full'> Conteúdos</h1>
            <Carousel products={products}/>
            </div>
        </div>
    )
}

export default Section05