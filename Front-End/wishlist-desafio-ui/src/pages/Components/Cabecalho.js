import React from 'react';
import { Link } from 'react-router-dom';

function Cabecalho() {
    let token = localStorage.getItem("wishlist-usuario");

    console.log(token);

    if (token == null || token == "")
    {
        return (
            <section className="header">
                <h1>WISHLIST</h1>
    
                <ul>
                    <li><Link link="/cadastrarusuario">Cadastrar Usuário</Link></li>
                    <li><Link to="/login">Logar</Link></li>
                </ul>
    
            </section>
        );
    } else {
        return (
            <section className ="header">
                <h1>WishList</h1>
                <ul>
                    <li><Link to="/meusdesejos">Meus desejos</Link></li>
                    <li><Link to="/todosdesejos">Todos os Desejos</Link></li>
                    <li><Link to="/sair">Sair</Link></li>
                </ul>
            </section>
        );
    }
}
export default Cabecalho;