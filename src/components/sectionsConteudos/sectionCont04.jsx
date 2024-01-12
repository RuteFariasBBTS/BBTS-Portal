import React, { useState } from 'react'
import person from '../../assets/images/person.png'
import InputField from '../inputField/InputField'
import Footer from '../footer/Footer';

const sectionCont04 = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleChangeNome = (event) => {
        const value = event.target.value;
        setNome(value);
    };
    const isNomeValid =
        nome.length >= 8 &&
        /^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF\uFB00-\uFB06\s]+$/.test(
            nome
        );

    const handleChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    };
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    return (
        <div className="w-full relative h-full min-h-screen flex items-center justify-center flex-col">
            <div className="w-full max-w-6xl m-auto flex justify-center items-center flex-col gap-5 p-2">
                <h1 className='text-3xl text-white font-semibold text-center w-full'> Assine nossa NewsLetter</h1>
                <p className='text-white text-base pb-4'>
                    Receba as últimas atualizações de produtos, notícias da empresa<br />
                    e ofertas especiais diretamente na sua caixa de entrada.</p>
                    <div className='w-full max-w-lg m-auto flex flex-col gap-6'>
                <InputField
                    Valid={isNomeValid}
                    borderValue={!!nome}
                    onChange={handleChangeNome}
                    value={nome}
                    validMsg={nome ? !isNomeValid : false}
                    icon='a'
                    label="Nome completo"
                    ErroName="Nome inválido"
                    placeholder="Ex: Mariana Silva"
                />
                <InputField
                    Valid={isEmailValid}
                    borderValue={!!email}
                    onChange={handleChangeEmail}
                    value={email}
                    validMsg={email ? !isEmailValid : false}
                    icon="@"
                    label="E-mail"
                    ErroName="E-mail inválido"
                    placeholder="Ex: Exemplo@gmail.com"
                />
                    <div className='flex justify-center'>
                        <button className='px-4 py-1 bg-[#D9D9D9] text-[#002D4B] font-semibold rounded-full w-40'>Assinar</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default sectionCont04