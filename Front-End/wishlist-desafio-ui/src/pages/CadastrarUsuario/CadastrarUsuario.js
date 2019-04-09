import React,{Component} from 'react';
import '../../assets/css/login.css';
import Cabecalho from '../Components/Cabecalho'
import Axios from 'axios';
import Rodape from '../Components/Rodape';

class CadastrarUsuario extends Component{
    constructor(){
        super();
        this.state ={
            lista:[],
            nome:"",
            email:"",
            senha:""    
        }
        this.atualizaEstadoSenhaForm =this.atualizaEstadoSenha.bind(this)
        this.atualizaEstadoNomeForm = this.atualizaEstadoNome.bind(this)
        this.atualizaEstadoEmailForm = this.atualizaEstadoEmail.bind(this)
    }
    Cadastrar(event){
        event.preventDefault();
        Axios.post('http://192.168.3.143:5000/api/usuarios',{
            nome:this.state.nome,
            email:this.state.email,
            senha: this.state.senha
        })
        .then(data=>console.log(data))
        .catch(erro=>console.log(erro))
    }
    atualizaEstadoNome(event){
        this.setState({nome:event.target.value})
    }
    atualizaEstadoEmail(event){
        this.setState({email:event.target.value})
    }
    atualizaEstadoSenha(event){
        this.setState({senha:event.target.value})
    }
    render(){
        return(
            <div>
            <Cabecalho />
            <section className="campoLogar">
                <h2>Cadastro</h2>
                <form onSubmit={this.Cadastrar.bind(this)}>
                    <div className="item">
                       <a>Nome :</a> <input className="nome" type="text"  value={this.state.nome} onChange={this.atualizaEstadoNomeForm}
                       name="nome" 
                       />   
                    </div>
                <div className="item">
                        <a>Email :</a><input  className="email" type="text" value={this.state.email} onChange={this.atualizaEstadoEmailForm} name="email" />
                </div>
                    <div className="item">
                            <a>Senha :</a><input  className="senha" type="password" value={this.state.senha} onChange={this.atualizaEstadoSenhaForm} name="senha"/>
                    </div>
                    <button type="submit" className="btn2">CADASTRAR</button>
                </form>
            
            </section>
            <Rodape />
            </div>
            
        );
    }
}
export default CadastrarUsuario;