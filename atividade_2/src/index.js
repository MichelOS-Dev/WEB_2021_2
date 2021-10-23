import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './components/questao01/Hero';
import Enemy from './components/questao01/Enemy';
import Yujiro from './components/questao01/imagens/Yujiro.png';
import Baki from './components/questao01/imagens/Baki.png';
import Satoro from './components/questao03/imagens/Satoro.png'; 
import Sukuna from './components/questao03/imagens/Sukuna.png';
import Itadori from './components/questao03/imagens/Itadori.png'; 
import Mahito from './components/questao03/imagens/Mahito.png';
import Megumi from './components/questao03/imagens/Megumi.png'; 
import Suguru from './components/questao03/imagens/Suguru.png';
import Arena03 from './components/questao03/Arena'
import Arena01 from './components/questao01/Arena'
import World from './components/questao03/World';
import Arena04 from './components/questao04/Arena'
import Hero04 from './components/questao04/Hero'
import Enemy04 from './components/questao04/Enemy'
import Arena05 from './components/questao05/Arena'
import Hero05 from './components/questao05/Hero'
import Enemy05 from './components/questao05/Enemy'
import World05 from './components/questao05/World'


const root = document.getElementById('root')
                    //Questao 01
                    //Apresenta comoponente HERO e Enemy
/* ReactDOM.render(
  <div>
      <Hero name='Baki' imagem = {Baki}/>
      <Enemy name='Yujiro' imagem={Yujiro}/>
  </div>
  ,root) */
                    //Apresenta a Arena
/* ReactDOM.render(
  <React.StrictMode>
    <Arena01/>
  </React.StrictMode>,
  document.getElementById('root')
); */

              //Questão 02

// A execução da questão 02 é da mesma forma que a 01, só ira mudar os import, 
// que irão fazer referência a pasta da questão 02

              //Questão 03     

/* ReactDOM.render(
  <div>
      <World>
          <h2>Arena 01</h2>
          <Arena03 name = 'Satoro Gojo' nome ='Sukuna' imagem={Satoro} img={Sukuna}/>
          <h2>Arena 02</h2>
          <Arena03 name = 'Itadori' nome ='Mahito' imagem={Itadori} img={Mahito} />
          <h2>Arena 03</h2>
          <Arena03 name = 'Megumi' nome ='Suguru Geto' imagem={Megumi} img={Suguru} />
      </World>
  </div>
  ,root)   */



                        //QUESTÃO 04

  /* ReactDOM.render(
    <div>
        <Arena04 arena = 'Tokio Dome – Underground Arena'>
            <Hero04 name="Baki" imagem={Baki}/>
            <Enemy04 name="Yujiro" imagem={Yujiro}/>
        </Arena04>
    </div>
    ,root) */


                              //Questão 05
    ReactDOM.render(
      <div>
        <World05>
            <Arena05 arena='Castelão'>
                <Hero05 nome = 'Satoro'imagem={Satoro}/>
                <Enemy05 nome = 'Sukuna'imagem={Sukuna}/>
            </Arena05>
            <Arena05 arena='Maracanã'>
                <Hero05 nome = 'Itadori'imagem={Itadori}/>
                <Enemy05 nome = 'Mahito'imagem={Mahito}/>
            </Arena05>
            <Arena05 arena='NeoQuimica Arena'>
                <Hero05 nome = 'Megumi'imagem={Megumi}/>
                <Enemy05 nome = 'Suguru Geto'imagem={Suguru}/>
            </Arena05>
        </World05>
      </div>
      ,root) 

