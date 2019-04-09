import React, {Component} from 'react';
import Axios from 'axios';
import Cabecalho from '../Components/Cabecalho'
import '../../assets/css/login.css'
import '../../assets/css/desejos.css'

export default class TodosDesejos extends Component {
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
                    <!-- <div class="tabelaContent"> -->
                    <h2>Todos os desejos</h2>
                    <table class="ma-top-g">
                        <tr id="head">
                            <th>#</th>
                            <th>Descrição</th>
                            <th>Data de Criação</th>
                            <th>Categoria</th>
                            <th>Autor</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Comprar PC da NASA</td>
                            <td>12/2/2002</td>
                            <td>Comprar</td>
                            <td>Ariel</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Comprar PC da NASA</td>
                            <td>12/2/2002</td>
                            <td>Comprar</td>
                            <td>Ariel</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Comprar PC da NASA</td>
                            <td>12/2/2002</td>
                            <td>Comprar</td>
                            <td>Ariel</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Comprar PC da NASA</td>
                            <td>12/2/2002</td>
                            <td>Comprar</td>
                            <td>Ariel</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Comprar PC da NASA</td>
                            <td>12/2/2002</td>
                            <td>Comprar</td>
                            <td>Ariel</td>
                        </tr>
                    </table>
                    <!-- </div> -->
                </section>
            </main>
            </div>
        );
    }
}