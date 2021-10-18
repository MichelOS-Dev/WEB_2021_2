import React from 'react'

function hero(props){
    return(
        <h2>
            Nome: {props.name}!<br/>
            <img src={props.imagem} alt="Baki" width='100px'/>
        </h2>
    )
}

export default hero