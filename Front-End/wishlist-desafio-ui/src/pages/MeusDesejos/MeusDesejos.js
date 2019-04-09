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

    componentDidMount()
    {
        this.buscarMinhasConsultas();
    }

    render(){
        return(
            <div>
            <Cabecalho />
                <main>
                    <section id="filterUser" className="pa-all-g">
                        <h2>Filtrar por Categoria</h2>
                        <form action="" id="formUser">
                            <select name="categorias" id="categoriasSelect">
                                <option value="comprar">
                                    Comprar
                                </option>
                                <option value="comprar">
                                    Viajar
                                </option>
                            </select>
                            <label for="">
                                <input className="btn-new" value="Filtrar" type="submit" id="submitBtn" name="submit" />
                            </label>
                        </form>
                    </section>
                    <section id="tabelaDesejos" className="pa-all-g">
                        {/* <!-- <div className="tabelaContent"> --> */}
                        <h2>Meus Desejos</h2>
                        <table className="ma-top-g">
                            <tr id="head">
                                <th>#</th>
                                <th>Descrição</th>
                                <th>Data de Criação</th>
                                <th>Categoria</th>
                                <th>Autor</th>
                            </tr>
                            {this.state.lista.map(function (desejo) {
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