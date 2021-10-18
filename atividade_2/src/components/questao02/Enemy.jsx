import React from 'react'

function enemy(props){
    return(
        <h2>
            Nome: {props.name}!<br/>
            <img src={props.imagem} alt="Yujiro" width='100px'/>
        </h2>
    )
}

export default enemy