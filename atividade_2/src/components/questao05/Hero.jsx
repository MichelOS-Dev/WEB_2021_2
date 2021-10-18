import React from 'react'

const Hero = (props) => {
    return(
        <div>
            <h1 align='center'>
                Hero {props.nome} da Arena {props.arena}
                <img src={props.imagem} alt={props.nome} width='100px'/>
            </h1>
        </div>
    )
}
export default Hero