import React from 'react'
import Carousel from '../carousel/Carousel'

const SectionCont03 = () => {
    const products = [
        {name: 'a'},
        {name: 'a'},
        {name: 'a'},
        {name: 'a'},
        {name: 'a'},
    ]
    return (
        <div className="w-full relative h-full min-h-screen flex flex-col">
            <div className="w-full max-w-6xl m-auto flex flex-col gap-10">
            <h1 className='text-3xl text-white font-semibold text-left w-full mt-20'> Recentes</h1>
            <Carousel products={products}/>
            </div>
        </div>
    )
}

export default SectionCont03