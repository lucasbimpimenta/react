import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {
        return (

            <ul className="navbar-nav mr-auto mt-lg-0">
                <li className="nav-item active">
                    <Link to="/inicio" className="nav-link">Início</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contratações
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/registropreco" className="nav-link">Registro de Preço</Link>
                        <Link to="/licitacao" className="nav-link">Licitação</Link>
                    </div>
                </li>
            </ul>
        )
    }
}