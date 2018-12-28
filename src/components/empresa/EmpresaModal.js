import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

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
        width                 : '65%',
        backgroundColor       : 'rgba(255, 255, 255, 1)'
    },
    overlay: {
      backgroundColor: 'rgba(0, 102, 179, 0.36)'
    }
};

export default class EmpresaModal extends Component {

    constructor(props) {

        super(props);

        this.state = {
            modalIsOpen: false,
            bloqueiaBotaoGravar: false,
            
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

    componentDidMount(){
      console.log('Montou componente', this.state.modalIsOpen, this.props.modalIsOpen);
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
                            contentLabel="Empresa"
                            shouldCloseOnOverlayClick={false}
                        >
                            <form onSubmit={this.envia}>
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
                                    <button type="submit" className="btn btn-sm btn-primary" disabled={this.state.bloqueiaBotaoGravar}>Gravar</button>
                                    <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Fechar</button>
                                </div>
                            </form>
                    </Modal>
                </div>
        )
    }
}