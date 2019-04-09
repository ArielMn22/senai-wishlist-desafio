import React, { Component } from 'react';
import Cabecalho from '../Components/Cabecalho';
import '../../assets/css/login.css'
import '../../assets/css/cadastrodesejos'

class CadastrarDesejos extends Component {
    render() {
        return (
            <div>
                <CabecalhoLogado />
                <main>
                    <div class="usuario">
                        <h3>Nome do Usuário</h3>
                    </div>
                    <div class="cadastro">
                        <h2>Cadastre seu desejo:</h2>
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <br />
                            <button class="btn-add">Adicionar</button>
                        </form>
                    </div>
                </main>
            </div>

        );
    }
}

export default CadastrarDesejos;