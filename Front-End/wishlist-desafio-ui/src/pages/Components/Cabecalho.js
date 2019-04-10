import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/cabecalho.css'

function Cabecalho() {
    let token = localStorage.getItem("wishlist-usuario");

    console.log(token);

    if (token == null || token == "")
    {
        return (
            <nav id="menuSuperior">
                <div id="logoNome">
                    <p>Wishlist</p>
                </div>
                <ul>
                    <li><Link link="/cadastrarusuario">Cadastrar Usuário</Link></li>
                    <li><Link to="/login">Logar</Link></li>
                </ul>
            </nav>
            // <section className="header">
            //     <h1>WISHLIST</h1>
    
            //     <ul>
            //         <li><Link link="/cadastrarusuario">Cadastrar Usuário</Link></li>
            //         <li><Link to="/login">Logar</Link></li>
            //     </ul>
    
            // </section>
        );
    } else {
        return (
            <nav id="menuSuperior">
                <div id="logoNome">
                    <p>Wishlist</p>
                </div>
                <ul>
                <li>
                    <Link to="/meusdesejos">Meus desejos</Link></li>
                    <li><Link to="/todosdesejos">Todos os Desejos</Link></li>
                    <li><Link to="/sair">Sair</Link></li>
                </ul>
            </nav>
            // <section className ="header">
            //     <h1>WishList</h1>
            //     <ul>
            //         <li><Link to="/meusdesejos">Meus desejos</Link></li>
            //         <li><Link to="/todosdesejos">Todos os Desejos</Link></li>
            //         <li><Link to="/sair">Sair</Link></li>
            //     </ul>
            // </section>
        );
    }
}
export default Cabecalho;