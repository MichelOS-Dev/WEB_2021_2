import React from 'react'

const Enemy = (props) => {
    return(
        <h2>
            Arena: {props.arena}<br/>
            Nome: {props.name}!<br/>
            <img src={props.imagem} alt="Yujiro" width='100px'/>
        </h2>
    )
}

export default Enemy