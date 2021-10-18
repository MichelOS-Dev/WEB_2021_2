import React from 'react'

const Enemy = (props) => {
    return(
        <div>
            <h1 align='center'>
                Enemy {props.nome} da Arena {props.arena}
                <img src={props.imagem} alt={props.nome} width='100px'/>
            </h1>
        </div>
    )
}
export default Enemy