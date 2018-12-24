import React, { Component } from 'react';
import MaskedInput from 'react-text-mask'
import axios from 'axios';

// /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/

export default class EmpresaForm extends Component {

    constructor() {
        super();
        this.state = { 
            existe: null,
            cnpj_invalido: null
        };
        //console.log();

        this.ultimoCNPJVerificado = null;
    }

    validarCNPJ(cnpj) {
    
        cnpj = cnpj.replace(/[^\d]+/g,'');
    
        if(cnpj === '') return false;
        
        if (cnpj.length !== 14)
            return false;
    
        // Elimina CNPJs invalidos conhecidos
        if (cnpj === "00000000000000" || 
            cnpj === "11111111111111" || 
            cnpj === "22222222222222" || 
            cnpj === "33333333333333" || 
            cnpj === "44444444444444" || 
            cnpj === "55555555555555" || 
            cnpj === "66666666666666" || 
            cnpj === "77777777777777" || 
            cnpj === "88888888888888" || 
            cnpj === "99999999999999")
            return false;
            
        // Valida DVs
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0,tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(0))
            return false;
            
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(1))
            return false;
            
        return true;
    }

    verificaCNPJ(e) {
        let valor = e.value;
        valor = valor.replace(/[^0-9]/g, "");

        if(this.validarCNPJ(valor))
        {
            this.setState( {cnpj_invalido:false} );

            if(this.props.tipo === 'add' && valor.length === 14 && valor.replace(/[^0-9]/g, "") !== this.ultimoCNPJVerificado) {
                e.disabled = true;

                axios.get(`http://www.gilogbh.des.mg.caixa/api/empresa/${valor}`)
                .then(res => {
                    const dados = res.data;
                    this.ultimoCNPJVerificado = valor;
                    console.log(dados)
                    if(dados.NO_RAZAO_SOCIAL)
                    {
                        this.setState( {existe:true} );
                        this.props.modal.bloquearGravar();
                    }
                    else
                    {
                        this.setState( {existe:false} );
                        this.props.modal.desbloquearGravar();
                    }
                    
                    e.disabled = false;
                })
            
            }
            else
            {
                this.ultimoCNPJVerificado = null;
                this.setState( {existe:null} );
                this.props.modal.desbloquearGravar();
            }
        }
        else
        {
            e.disabled = false;
            this.setState( {cnpj_invalido:true} );
            this.props.modal.bloquearGravar();
        }
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col-md-3 mb-3">
                        <label className="label-caixa-form" htmlFor="NU_CNPJ">CNPJ</label>
                        <MaskedInput
                            mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/,/\d/ ,'-', /\d/, /\d/]}
                            className={"form-control form-control-sm " + (this.state.existe || this.state.cnpj_invalido ? 'is-invalid' : '')}
                            placeholder="CNPJ"
                            guide={false}
                            id="NU_CNPJ"
                            onBlur={e => this.verificaCNPJ(e.target)}
                            onChange={e => this.verificaCNPJ(e.target)}
                        />
                        <div className="valid-feedback">
                            Válido
                        </div>
                        <div className="invalid-feedback">
                            { this.state.existe ? 'CNPJ já cadastrado' : 'Inválido' }
                        </div>
                    </div>
                    <div className="col-md-9 mb-3">
                        <label className="label-caixa-form" htmlFor="NO_RAZAO_SOCIAL">Razão Social</label>
                        <input type="text" className="form-control form-control-sm" id="NO_RAZAO_SOCIAL" placeholder="Razão Social" disabled={this.state.existe} required/>
                        <div className="valid-feedback">
                            Válido
                        </div>
                        <div className="invalid-feedback">
                            Inválido
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-5 mb-3">
                        <label className="label-caixa-form" htmlFor="NO_FANTASIA">Nome Fantasia</label>
                        <input type="text" className="form-control form-control-sm" id="NO_FANTASIA" placeholder="Nome Fantasia" disabled={this.state.existe} required/>
                        <div className="valid-feedback">
                            Válido
                        </div>
                        <div className="invalid-feedback">
                            Inválido
                        </div>
                    </div>
                    <div className="col-md-7 mb-3">
                        <label className="label-caixa-form" htmlFor="DE_ENDERECO">Endereço</label>
                        <input type="text" className="form-control form-control-sm" id="DE_ENDERECO" placeholder="Endereço completo" disabled={this.state.existe} required/>
                        <div className="valid-feedback">
                            Válido
                        </div>
                        <div className="invalid-feedback">
                            Inválido
                        </div>
                    </div>
                </div>
                 <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="label-caixa-form" htmlFor="DE_TELEFONE">Telefone</label>
                        <input type="text" className="form-control form-control-sm" id="DE_TELEFONE" placeholder="Telefone(s)" disabled={this.state.existe} required/>
                        <div className="valid-feedback">
                            Válido
                        </div>
                        <div className="invalid-feedback">
                            Inválido
                        </div>
                    </div>
                    <div className="col-md-8 mb-3">
                        <label className="label-caixa-form" htmlFor="DE_EMAIL">E-mail</label>
                        <input type="email" className="form-control form-control-sm" id="DE_EMAIL" placeholder="E-mail" disabled={this.state.existe} required/>
                        <div className="valid-feedback">
                            Válido
                        </div>
                        <div className="invalid-feedback">
                            Inválido
                        </div>
                    </div>
                </div>
            </form>
        )
    }
    
}