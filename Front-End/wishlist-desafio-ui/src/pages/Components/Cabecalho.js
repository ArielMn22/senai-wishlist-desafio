import React, { Component } from 'react';
import Login from '../Login/login';
function Cabecalho() {
    return (
        <section class="header">
            <h1>WISHLIST</h1>

            <ul>
                <li><a link="/login">Cadastrar</a></li>
                <li><a>Logar</a></li>
            </ul>

        </section>
    );
}
export default Cabecalho;