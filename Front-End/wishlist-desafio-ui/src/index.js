import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import MeusDesejos from './pages/MeusDesejos/MeusDesejos';
import Login from './pages/Login/login';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';



const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/login" component={Login}></Route>
                {/* <Route exact path="/cadastrarusuario" component={CadastrarUsuario}></Route> */}
                {/* <Route exact path="/cadastrardesejo" component={CadastrarDesejo}></Route> */}
                <Route exact path="/meusdesejos" component={MeusDesejos}></Route>
                {/* <Route exact path="/desejos" component={Desejos}></Route> */}
                {/* <Route component={NaoEncontrada}></Route> */}
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
