// import { render } from '@testing-library/react';
// import React from 'react';
// import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import '../pages/home.css'
function Mari() {
    return(
        <section className="general">

            <body>

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
            </body> 

            <footer></footer>      
        </section>
    )
}

export default Mari;