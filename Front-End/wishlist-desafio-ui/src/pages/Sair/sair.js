import React,{Component} from 'react';

class Sair extends Component{
    constructor(){
        localStorage.clear()
        this.props.history.push("/login");
    }
}


export default Sair;