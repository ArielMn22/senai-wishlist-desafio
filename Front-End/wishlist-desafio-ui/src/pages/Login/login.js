import React,{Component} from 'react';
import Cabecalho from '../Components/Cabecalho';
import '../../assets/css/login.css'
import Axios from 'axios';
import Rodape from '../Components/Rodape';
class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            senha:""
        }
        this.atualizaestadoemailForm=this.atualizaestadoemail.bind(this)
        this.atualizaestadosenhaForm=this.atualizaestadosenha.bind(this)
    }
    logar(event){
        event.preventDefault();
        Axios.post('http://192.168.3.143:5000/api/login',{
            email:this.state.email,
            senha:this.state.senha
        })
        .then(data=>{
            localStorage.setItem("wishlist-usuario", data.data.token);
            this.props.history.push("/meusdesejos");
            console.log(data)})
        .catch(erro=>console.log(erro))

    }
    atualizaestadoemail(event){
        this.setState({email:event.target.value})
    }
    atualizaestadosenha(event){
        this.setState({senha:event.target.value})
    }
    render(){
        return(
    <div>        
    <Cabecalho />
    <section className="campoLogar">
        <h2>Login</h2>
        <form onSubmit={this.logar.bind(this)}>
        <div className="item">
            <input placeholder="Insira seu Email" className="email" type="text" value={this.state.email} onChange={this.atualizaestadoemailForm}/>
        </div>
            <div className="item">
            <input placeholder="Insira sua Senha" className="senha" type="password" value={this.state.senha} onChange={this.atualizaestadosenhaForm} />
            </div>
            <button type="submit" className="btn">ENTRAR</button>
        </form>
    </section>
    <Rodape />
    </div>
        );
    }
}
export default Login;