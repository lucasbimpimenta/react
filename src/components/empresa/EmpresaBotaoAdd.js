import React, { Component } from 'react';
import Modal from 'react-modal';

import EmpresaForm from './EmpresaForm.js'

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '65%'
  }
};

export default class EmpresaBotaoAdd extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            bloqueiaBotaoGravar: false,
            NU_CNPJ: null,
            NO_RAZAO_SOCIAL: null,
            NO_FANTASIA: null,
            DE_ENDERECO: null,
            DE_TELEFONE: null,
            DE_EMAIL: null
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    bloquearGravar() {
        this.setState({bloqueiaBotaoGravar: true});
    }

    desbloquearGravar() {
        this.setState({bloqueiaBotaoGravar: false});
    }

    render() {
        return (
            <div>
                <button className="btn btn-sm btn-default w-100 " type="button" onClick={this.openModal}>Nova</button>
                <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        shouldCloseOnOverlayClick={false}
                    >
          
                        <div className="modal-header p-0 border-0">
                            <h3 className="titulo">Adicionar Empresa</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <EmpresaForm modal={this} tipo="add"/>
                        </div>
                        <div className="modal-footer p-0 pt-3">
                            <button type="button" className="btn btn-sm btn-primary" disabled={this.state.bloqueiaBotaoGravar}>Gravar</button>
                            <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Fechar</button>
                        </div>
                   
                </Modal>
            </div>
        )
    }
}