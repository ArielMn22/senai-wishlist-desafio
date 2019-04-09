import React,{Component} from 'react';
import '../../assets/css/login.css';
import Cabecalho from '../Components/Cabecalho'
import Axios from 'axios';

class CadastrarUsuario extends Component{
    constructor(){
        super();
        this.state ={
            lista:[],
            nome:"",
            email:"",
            senha:""    
        }
    }
    Cadastrar(event){
        event.preventDefault();
        Axios.post('',{
            nome:this.state.nome,
            email:this.state.email,
            senha: this.state.senha
        })
        .then(data=>console.log(data))
        .catch(erro=>console.log(erro))
    }
    render(){
        return(
            <div>
            <Cabecalho />
            <section className="campoLogar">
                <h2>Cadastro</h2>
                <form onSubmit={this.Cadastrar.bind(this)}>
                    <div className="item">
                       <a>Nome :</a> <input className="nome" type="text" value={this.state.nome}
                       name="nome"
                       />
                    </div>
                <div className="item">
                        <a>Email :</a><input  className="email" type="text" value={this.state.email} name="email" />
                </div>
                    <div className="item">
                            <a>Senha :</a><input  className="senha" type="password" value={this.state.senha} name="senha"/>
                    </div>
                    <button type="submit" className="btn2">CADASTRAR</button>
                </form>
            </section>
            </div>
        );
    }
}
export default CadastrarUsuario;