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
            descricao: ""
        }
        this.atualizaEstadoDescricaoForm = this.atualizaEstadoDescricao.bind(this)
    }

    Cadastrar(event) {
        event.preventDefault();
        Axios.post('http://192.168.3.143:5000/api/desejos', {
            descricao: this.state.descricao
        })
            .then(data => console.log(data))
            .catch(erro => console.log(erro))
    }

    atualizaEstadoDescricao(event){
        this.setState({descricao:event.target.value})
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
                        <form onSubmit={this.Cadastrar.bind(this)}>
                            <textarea className="descricao" id="" cols="30" rows="10" type='text' value={this.state.descricao} onChange={this.atualizaEstadoDescricaoForm} ></textarea>
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