import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import MeusDesejos from './pages/MeusDesejos/MeusDesejos';
import Login from './pages/Login/login';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import CadastrarUsuario from './pages/CadastrarUsuario/CadastrarUsuario';
import CadastrarDesejo from './pages/CadastroDesejo/CadastrarDesejo'
import TodosDesejos from './pages/TodosDesejos/TodosDesejos';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import { usuarioAutenticado } from './services/auth';
import sair from './pages/Sair/sair';
import Sair from './pages/Sair/sair';

const Permissao = ({ component : Component }) => (
    <Route
        render = {
            props => usuarioAutenticado() ? (<Component {...props}/>) : (<Redirect to ={{ pathname : '/login', state: {from: props.location}}}/>)
        }
    />
);


const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sair" component={Sair} />
                <Route exact path="/cadastrarusuario" component={CadastrarUsuario} />
                <Permissao exact path="/cadastrardesejo" component={CadastrarDesejo} />
                <Permissao exact path="/meusdesejos" component={MeusDesejos} />
                <Permissao exact path="/todosdesejos" component={TodosDesejos} />
                {/* <Route exact path="/desejos" component={Desejos} /> */}
                <Route component={NaoEncontrada} />
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
