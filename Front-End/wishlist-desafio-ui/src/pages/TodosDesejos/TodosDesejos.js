import React, {Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Components/Cabecalho'
import '../../assets/css/login.css'
import '../../assets/css/desejos.css'

export default class TodosDesejos extends Component {
    constructor () {
        super();

        this.state = {
            lista: [],
            nomeUsuario: ""
        };
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

    buscarPorNomeUsuario(){
        Axios.get('http://192.168.3.143:5000/api/desejos/')
        .then(data => {
            console.log(data);
            this.setState({ lista : data.data});
            // carregarTabela(data);
        })
    }

    componentDidMount()
    {
        this.buscarMinhasConsultas();
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
                    <form action="" id="formUser">
                        <label for="">
                            <input class="inpt" placeholder="Insira o nome usuário" type="text" id="usuarioNome" name="usuarioNome" />
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
                        {this.state.lista.map(function(desejo) {
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