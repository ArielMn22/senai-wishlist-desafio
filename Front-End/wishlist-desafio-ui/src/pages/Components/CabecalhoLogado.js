import React, { Component } from 'react';
import Login from '../CadastroDesejo/CadastrarDesejo';

function CabecalhoLogado() {
    return (
        <section classNme="header">
            <h1>WishList</h1>
            <ul>
                <li><a href="">Meus desejos</a></li>
                <li><a href="">Todos os Desejos</a></li>
                <li><a href="">Sair</a></li>
            </ul>
        </section>
    );
}
export default CabecalhoLogado;