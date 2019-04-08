import React, {Component} from 'react';
import Axios from 'axios';

export default class MeusDesejos extends Component {
    buscarMinhasConsultas() {
        // Axios.get('http://localhost:5000/api/desejos/' + localStorage.getItem("usuarioNome"))
        Axios.get('http://localhost:5000/api/desejos/ariel')
        .then(data => {
            console.log(data)
            // carregarTabela(data);
        })
        .catch(erro => console.log(erro))
    }

    render(){
        return(
            // HTML
            <h1>It Works!</h1>
        );
    }
}