import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegistroPrecoLinha from './RegistroPrecoLinha.js';

export default class RegistroPreco extends Component {

    constructor() {
        super();
        this.state = {registrosPreco:[]};
    }

    componentDidMount(){

        fetch('http://www.gilogbh.des.mg.caixa/api/registroPreco/')
        .then(response => response.json())
        .then(registrosPreco => {
            this.setState({registrosPreco:registrosPreco});
        });
    }

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <h3 className="titulo">Registro de Preço</h3>
                </div>
                 <div className="row">
                    <div className="col-sm-2">
                        <Link to="/registropreco/cadastrar" className="btn btn-sm btn-primary">Cadastrar</Link>
                    </div>
                    <div className="col-sm-10">
                         <div className="row">

                         </div>
                         <div className="row">
                            <div className="col-sm-12">
                                <div className="list-group">
                                    { this.state.registrosPreco.map(rp => <RegistroPrecoLinha rp={rp}/>) }
                                </div>
                            </div>
                         </div>
                    </div>
                 </div>
            </div>
        )
    }
}