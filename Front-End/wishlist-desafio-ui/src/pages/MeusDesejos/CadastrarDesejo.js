import React, { Component } from 'react';
import CabecalhoLogado from '../Components/CabecalhoLogado';
import '../../assets/css/login.css'
import '../../assets/css/cadastrodesejos.css'
import Axios from 'axios';

class CadastrarDesejo extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            descricao: "",
        }
    }

    Cadastrar(event) {
        event.preventDefault();
        Axios.post('', {
            descricao: this.state.descricao
        })
            .then(data => console.log(data))
            .catch(erro => console.log(erro))

    }

    render() {
        return (
            <div>
                <CabecalhoLogado />
                <main>
                    <div className="usuario">
                        <h3>Nome do Usuário</h3>
                    </div>
                    <div className="cadastro">
                        <h2>Cadastre seu desejo:</h2>
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10" type='text' value={this.state.descricao} name="descricao"></textarea>
                            <br />
                            <button type="submit" className="btn-add">Adicionar</button>
                        </form>
                    </div>
                </main>
            </div>

        );
    }
}

export default CadastrarDesejo;