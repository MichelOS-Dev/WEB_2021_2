import React from 'react'
import Enemy from './Enemy';
import Hero from './Hero';
import Baki from './imagens/Baki.png'
import Yujiro from './imagens/Yujiro.png'

function arena(){
    return(
        <div>
            <Hero name='Baki'imagem={Baki}/>
            <Enemy name='Yujiro' imagem={Yujiro}/>
        </div>
    )
}

export default arena