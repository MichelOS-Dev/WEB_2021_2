import React from 'react'

const Hero = (props) =>{
    return(
        <h2>
            Arena: {props.arena}<br/>
            Nome: {props.name}!<br/>
            <img src={props.imagem} alt="Baki" width='100px'/>
        </h2>
    )
}

export default Hero