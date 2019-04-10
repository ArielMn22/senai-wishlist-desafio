import React, { Component } from 'react';
import Cabecalho from '../Components/Cabecalho';
import '../../assets/css/login.css'
import '../../assets/css/cadastrodesejos.css'
import Axios from 'axios';
import Rodape from '../Components/Rodape';

class CadastrarDesejo extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            descricao: "",
            listaVerbos: [],
            categoria: "",
            categoriaId: "",
            // date: date
        }

        // var today = new Date(),
        //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.atualizaEstadoDescricaoForm = this.atualizaEstadoDescricao.bind(this)
    }

    buscarCategoriasSelect()
    {
        Axios.get("http://192.168.3.143:5000/api/verbos")
        .then(data => {
            console.log(data);
            this.setState({ listaVerbos : data.data });
        })
        .catch(erro => console.log(erro))
    }

    componentDidMount()
    {
        this.buscarCategoriasSelect();
    }

    Cadastrar(event) {
        let token = localStorage.getItem("wishlist-usuario");

        var config = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': "bearer " + token
            }
        };

        event.preventDefault();
        console.log('candida');
        Axios.post('http://192.168.3.143:5000/api/desejos', {
            idVerbo: this.state.categoriaId,
            descricao: this.state.descricao
        },
        config)
            .then(data => console.log(data))
            .catch(erro => console.log(erro))
        alert("cadastrado com sucesso");
    }

    atualizaEstadoDescricao(event){
        this.setState({ descricao:event.target.value });
    }

    atualizaEstadoSelect(event) {
        this.setState({ categoria : event.target.value });

        this.state.listaVerbos.forEach(element => {
            console.log(element.nome);
            console.log(event.target.value);

            if (element.nome == event.target.value)
            {
                this.setState({ categoriaId : element.id });
            }
        });
    }

    render() {
        return (
            <div>
                <Cabecalho />
                <main>
                    <div className="usuario">
                        <h3>Nome do Usuário</h3>
                    </div>
                    <div className="cadastro">
                        <h2>Cadastre seu desejo:</h2>
                        <form onSubmit={this.Cadastrar.bind(this)}>
                            <textarea className="descricao" id="" cols="30" rows="10" type='text' value={this.state.descricao} onChange={this.atualizaEstadoDescricaoForm} ></textarea>
                            
                            <select value={this.state.categoria} onChange={this.atualizaEstadoSelect.bind(this)} name="categoria" id="categoriasSelect">
                                <option value="Sem filtro">Sem filtro</option>
                                    {this.state.listaVerbos.map(function (categoria) {
                                        return (
                                            <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option>
                                        );
                                    })}
                                </select>
                            <br />
                            <button type="submit" className="btn-add">Adicionar</button>
                        </form>
                    </div>
                </main>
                <Rodape />
            </div>
        );
    }
}

export default CadastrarDesejo;