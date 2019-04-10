import React, {Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Components/Cabecalho'
import '../../assets/css/login.css'
import '../../assets/css/desejos.css'
import { Z_FILTERED } from 'zlib';
import Rodape from '../Components/Rodape';

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
            this.setState({ listaFiltrada : data.data});
            // carregarTabela(data);
        })

        // this.setState({listaFiltrada : this.state.lista});

        // .catch(erro => console.log(erro))
    }

    buscarPorNomeUsuario(event){
        event.preventDefault();
    
        let nome = this.state.nomeUsuario;
        let _listaFiltrada = [];

        if (nome == "" || nome == null)
        {
            _listaFiltrada = this.state.lista;
        } else {
            _listaFiltrada = this.state.lista.filter(x => x.usuarioNome == nome);
        }
        
        console.log(_listaFiltrada);
        this.setState({ listaFiltrada : _listaFiltrada });
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
            <Cabecalho />
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
                                <tr key={desejo.id}>
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
            <Rodape />
            </div>
        );
    }
}