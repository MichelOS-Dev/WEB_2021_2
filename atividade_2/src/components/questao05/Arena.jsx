import React from "react"
const Arena = (props) =>
    <div>
        <h1>Luta na arena {props.arena}</h1>
        {
            React.Children.map(
                props.children,
                (Hero,Enemy) => {
                    //return React.cloneElement(personagem,{casa:props.casa, canal:props.canal})
                    return React.cloneElement(Hero, { ...props }, Enemy,{...props})
                }
            )
        }
    </div>
export default Arena