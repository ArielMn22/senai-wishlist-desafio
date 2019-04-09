import React, {Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Components/Cabecalho'
import '../../assets/css/login.css'
import '../../assets/css/desejos.css'
import { Z_FILTERED } from 'zlib';

export default class TodosDesejos extends Component {
    constructor (props) {
        super(props);

        this.state = {
            lista: [],
            listaFiltrada:[],
            nomeUsuario: ""
        };

        // this.setState({listaFiltrada : this.state.lista });
    }

    buscarMinhasConsultas() {
        // Axios.get('http://localhost:5000/api/desejos/' + localStorage.getItem("usuarioNome"))
        Axios.get('http://192.168.3.143:5000/api/desejos/')
        .then(data => {
            console.log(data);
            this.setState({ lista : data.data});
            // carregarTabela(data);
        })

        // .catch(erro => console.log(erro))
    }

    buscarPorNomeUsuario(event){
        event.preventDefault();
    
        let nome = this.state.nomeUsuario;
        let _listaFiltrada = this.state.lista.filter(x => x.usuarioNome == nome);

        console.log(_listaFiltrada);

        this.setState({ listaFiltrada : _listaFiltrada });

        this.buscarMinhasConsultas(this.state.listaFiltrada);
        // console.log(this.state.nomeUsuario);
        // Axios.get("http://192.168.3.143:5000/api/desejos/" + this.state.nomeUsuario)
        // .then(data => {
        //     console.log(data);
        //     this.setState({ lista : data.data});
        //     // carregarTabela(data);
        // })
    }

    componentDidMount()
    {
        this.buscarMinhasConsultas();
        // this.setState({ listaFiltrada : this.state.lista});
    }

    atualizaEstadoNomeUsuario(event)
    {
        this.setState({nomeUsuario : event.target.value});
    }

    render () {
        return(
            <div>
                    <header>
                <section class="header">
                    <h1>WISHLIST</h1>
            
                    <ul>
                        <li><a href="cadastro.html">Cadastrar</a></li>
                        <li><a href="login.html">Logar</a></li>
                    </ul>
                    
                </section>
            </header>
            <main>
                <section id="filterUser" class="pa-all-g">
                    <h2>Filtrar por Usuário</h2>
                    <form onSubmit={this.buscarPorNomeUsuario.bind(this)} action="" id="formUser">
                        <label for="">
                            <input
                            class="inpt"
                            placeholder="Insira o nome usuário"
                            type="text"
                            id="usuarioNome"
                            value={this.state.nomeUsuario}
                            onChange={this.atualizaEstadoNomeUsuario.bind(this)}
                            name="usuarioNome" />
                            {/* type="text"
                            value={this.state.nome}
                            onChange={this.atualizaEstadoNome}
                            id="nome-tipo-evento"
                            placeholder="tipo do evento" */}
                        </label>
                        <label for="">
                            <input class="btn-new" value="Filtrar" type="submit" id="submitBtn" name="submit" />
                        </label>
                    </form>
                </section>
                <section id="tabelaDesejos" class="pa-all-g">
                    {/* <!-- <div class="tabelaContent"> --> */}
                    <h2>Todos os desejos</h2>
                    <table class="ma-top-g">
                        <tr id="head">
                            <th>#</th>
                            <th>Descrição</th>
                            <th>Data de Criação</th>
                            <th>Categoria</th>
                            <th>Autor</th>
                        </tr>
                        {this.state.listaFiltrada.map(function(desejo) {
                            return(
                                <tr>
                                    <td>{desejo.id}</td>
                                    <td>{desejo.descricao}</td>
                                    <td>{desejo.dataCriacao}</td>
                                    <td>{desejo.verboNome}</td>
                                    <td>{desejo.usuarioNome}</td>
                                </tr>
                            );
                        })}
                    </table>
                    {/* <!-- </div> --> */}
                </section>
            </main>
            </div>
        );
    }
}