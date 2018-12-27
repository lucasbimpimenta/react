import React, { Component } from 'react';
import MaskedInput from 'react-text-mask'
import {connect} from 'react-redux';

import InputBasico from '../basicos/InputBasico';

import EmpresaApi from '../../controles/empresa/EmpresaApi';
import {validarCNPJ} from '../../helpers/Validacoes';


class EmpresaForm extends Component {

    constructor() {
        super();

        this.state = { existe: null}
    }

    verificaCNPJ(cnpj){
      console.log(cnpj);
      //this.props.comenta(this.props.foto.id,this.NU_CNPJ.value);
    }

    render() {
        return (
            <div>
                <div className="form-row">
                    <div className="col-md-3 mb-3">
                        <label className="label-caixa-form" htmlFor="NU_CNPJ">CNPJ</label>
                        <MaskedInput
                            mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/,/\d/ ,'-', /\d/, /\d/]}
                            //className={"form-control form-control-sm " + (this.state.existe || this.state.cnpj_invalido ? 'is-invalid' : '')}
                            className="form-control form-control-sm "
                            placeholder="CNPJ"
                            guide={false}
                            id="NU_CNPJ"
                            onBlur={ e => e.target }
                            onChange={e => this.verificaCNPJ(e.target.value)}
                            ref={input => this.NU_CNPJ = input}
                        />
                        <div className="valid-feedback">
                            Válido
                        </div>
                        <div className="invalid-feedback">
                           { /* this.state.existe ? 'CNPJ já cadastrado' : 'Inválido'*/ }
                        </div>
                    </div>
                    <div className="col-md-9 mb-3">
                        <InputBasico id="NO_RAZAO_SOCIAL" label="Razão Social" placeholder="Razão Social" required ref={input => this.NO_RAZAO_SOCIAL = input}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <InputBasico id="NO_FANTASIA" placeholder="Nome Fantasia" ref={input => this.NO_FANTASIA = input} required/>
                    </div>
                    <div className="col-md-7 mb-3">
                        <InputBasico id="DE_ENDERECO" placeholder="Endereço completo" ref={input => this.DE_ENDERECO = input} required/>
                    </div>
                </div>
                 <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <InputBasico id="DE_TELEFONE" placeholder="Telefone(s)" ref={input => this.DE_TELEFONE = input} required/>
                    </div>
                    <div className="col-md-8 mb-3">
                        <InputBasico type="email" id="DE_EMAIL" placeholder="E-mail" ref={input => this.DE_EMAIL = input} required/>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default EmpresaForm