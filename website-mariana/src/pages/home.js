// import { render } from '@testing-library/react';
// import React from 'react';
// import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

import circuloVazado from '../assets/img/grafismos/circuloVazadoPNG.png'
import imagemMinhaBanner from '../assets/img/fotos minhas/fotoHomePNG.png'
// import manchaBranca from '../assets/img/grafismos/grafismoManchaBrancaPNG.png'
// import manchaVerde from '../assets/img/grafismos/grafismoManchaVerdePNG.png'
// import mouse from '../assets/img/icones/mouseCerto.png'
// import teste from '../assets/img/icones/css.png'

import '../pages/home.css'
// import '../pages/novo.scss'
function Mari() {
    return(
        <section className="general">

            <body>
            <div class="page-bg">
                            <div class="animation-wrapper">
                                <div class="particle particle-1"></div>
                                <div class="particle particle-2"></div>
                                <div class="particle particle-3"></div>
                                <div class="particle particle-4"></div>
                            </div>
                        </div>


                {/* <div className="boxy"></div> */}
            <header>
                <div className="container-grid topo">
                    
                <nav>
                    <ul className="menu">
                        <li><Link to="/teste">Home</Link></li>
                        <li><Link href="#">O que eu faço</Link></li>
                        <li><Link href="#">Skills</Link></li>
                        <li><Link href="">Sobre mim</Link></li>
                        <li><Link href="">Contato</Link></li>
                    </ul>
                </nav>
                </div>

            </header>
            <div className="tudo">
                
                <div className="container-grid banner">
                        {/* <div className="manchaBranca"> */}
                            {/* <img  src={manchaBranca} alt="" /> */}
                        

                                
                            {/* <div className="manchaVerde"> */}
                                {/* <img className="img" src={manchaVerde} alt="" /> */}
                            {/* </div> */}

                            <div className="texto ">

                            <div className="abrigoo">
                                <div className="abrigo">
                                    <div className="aaa">
                        <h3>Hello World,</h3>
                        <h1>sou a mariana</h1>
                        <h4>WEB DEVELOPER, WEB DESIGNER E PUBLICITÁRIA EM ASCENÇÃO :)</h4>
                        </div>
                        </div>
                            </div>
                        {/* <div className="mouse container-grid">
                                    <img src={mouse} alt="" />
                                </div> */}
                    </div>
                        {/* </div> */}
                    
                    <div id="imagem1">

                    <img src={imagemMinhaBanner} alt="" />

                    <div id="imagem2">
                    <img src={circuloVazado} alt="" />
                    </div>
                    </div>

                </div>
                    
                </div>
            </body> 

            <footer></footer>      
        </section>
    )
}

export default Mari;