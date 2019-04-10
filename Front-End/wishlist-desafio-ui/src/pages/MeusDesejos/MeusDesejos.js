import React, {Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Components/Cabecalho'
import '../../assets/css/login.css'
import '../../assets/css/desejos.css'

export default class MeusDesejos extends Component {

    constructor () {
        super();

        this.state = {
            lista: [],
            listaFiltrada: [],
            usuarioNome: "",
            listaVerbos: [],
            categoriaFiltrada: ""
        };
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

    buscarMinhasConsultas() {
        let jwtDecode = require('jwt-decode'); // Importando o jwt-decode

        let decode = jwtDecode(localStorage.getItem("wishlist-usuario"));
        
        let nomeUsuario = decode.nome;

        this.setState({ usuarioNome : nomeUsuario });

        console.log("NOME DO USUARIO LOGADO: " + nomeUsuario);
        console.log("NOME DO USUARIO LOGADO - this.state.usuarioNome: " + this.state.usuarioNome);
        
        console.log("Token decodificado: " + decode);
        Axios.get("http://192.168.3.143:5000/api/desejos/usuario/" + nomeUsuario)
        .then(data => {
            console.log(data);
            this.setState({ lista : data.data});
            this.setState({ listaFiltrada : data.data});
        })
        .catch(erro => console.log(erro))
    }

    filtrarPorVerbo(event){
        event.preventDefault();

        let categoria = this.state.categoriaFiltrada;
        let _listaFiltrada = [];

        if (categoria == "" || categoria == null || categoria == "Sem filtro")
        {
            _listaFiltrada = this.state.lista;
        } else {
            _listaFiltrada = this.state.lista.filter(x => x.verboNome == categoria);
        }

        this.setState({ listaFiltrada : _listaFiltrada });
    }

    componentDidMount()
    {
        this.buscarMinhasConsultas();
        this.buscarCategoriasSelect();
    }

    atualizaVerboListar(event)
    {
        this.setState({ categoriaFiltrada : event.target.value })
    }

    render(){
        return(
            <div>
            <Cabecalho />
                <main>
                    <section id="filterUser" className="pa-all-g">
                        <h2>Filtrar por Categoria</h2>
                        <form onSubmit={this.filtrarPorVerbo.bind(this)} action="" id="formUser">
                            <label>
                                <select value={this.state.categoriaFiltrada} onChange={this.atualizaVerboListar.bind(this)} name="categoria" id="categoriasSelect">
                                <option value="Sem filtro">Sem filtro</option>
                                    {this.state.listaVerbos.map(function (categoria) {
                                        return (
                                            <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option>
                                        );
                                    })}
                                    {/* <option value="comprar">
                                        Comprar
                                    </option>
                                    <option value="comprar">
                                        Viajar
                                    </option> */}
                                </select>
                            </label>
                            <label htmlFor="">
                            <button className="btn-new" type="submit" id="submitBtn" name="submit">Filtrar</button>
                                {/* <input className="btn-new" value="Filtrar" type="submit" id="submitBtn" name="submit" /> */}
                            </label>
                        </form>
                    </section>
                    <section id="tabelaDesejos" className="pa-all-g">
                        {/* <!-- <div className="tabelaContent"> --> */}
                        <h2>Meus Desejos</h2>
                        <table className="ma-top-g">
                        <thead>

                            <tr id="head">
                                <th>#</th>
                                <th>Descrição</th>
                                <th>Data de Criação</th>
                                <th>Categoria</th>
                                <th>Autor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listaFiltrada.map(function (desejo) {
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
                        </tbody>
                        </table>
                        {/* <!-- </div> --> */}
                    </section>
                </main>
            </div>
        );
    }
}