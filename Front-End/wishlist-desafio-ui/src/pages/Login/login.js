import React,{Component} from 'react';
import Cabecalho from '../Components/Cabecalho';
import '../../assets/css/login.css'
import Axios from 'axios';
class Login extends Component{
    render(){
        return(
    <div>        
    <Cabecalho />
    <section className="campoLogar">
        <h2>Login</h2>
        <form>
        <div className="item">
            <input placeholder="Insira seu Email" className="email" />
        </div>
            <div className="item">
            <input placeholder="Insira sua Senha" className="senha" />
            </div>
            <button className="btn">ENTRAR</button>
        </form>
    </section>
    </div>
        );
    }
}
export default Login;