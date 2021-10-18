import React from 'react'
import Enemy from './Enemy';
import Hero from './Hero';

const Arena = (props) => {
    return(
        <div>
            <h4 align='center'>
                <Hero name={props.name} imagem={props.imagem}/>
                <Enemy name={props.nome} imagem={props.img}/>
            </h4>
        </div>
    )
}
export default Arena