import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import EmpresaBotaoAdd from '../empresa/EmpresaBotaoAdd.js';

const mask100Percent = createNumberMask({
    prefix: '',
    suffix: '%', // This will put the dollar sign at the end, with a space.
    includeThousandsSeparator: false, // (boolean): whether or not to separate thousands. Defaults to to true.
    thousandsSeparatorSymbol: '.', // (string): character with which to separate thousands. Default to ','.
    allowDecimal: false, //whether or not to allow the user to enter a fraction with the amount. Default to false.
    decimalSymbol: ',', //character that will act as a decimal point. Defaults to '.'
    decimalLimit: 2, // how many digits to allow after the decimal. Defaults to 2
    integerLimit: 3, //limit the length of the integer number. Defaults to null for unlimited
    requireDecimal: false, // whether or not to always include a decimal point and placeholder for decimal digits after the integer. Defaults to false.
    allowNegative: false, //whether or not to allow negative numbers. Defaults to false
    allowLeadingZeroes: true
})

function mascaraCnpj(valor) {
    valor = '00000000000000' + valor;
    return valor.slice(-14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5");
}

const promiseOptions = inputValue => fetch('http://www.gilogbh.des.mg.caixa/api/empresa/')
.then(response => response.json())
.then(empresas => {
                    let dados = [];
                    empresas.map(empresa => dados.push({'label': mascaraCnpj(empresa.NU_CNPJ) + ' - ' + empresa.NO_RAZAO_SOCIAL, 'value': empresa.NU_CNPJ}));
                    return dados;
                });

export default class RegistroPrecoCadastrar extends Component {

    constructor() {
        super();
        this.state = { selectedOption:null };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        //console.log(`Option selected:`, selectedOption);
    }

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <h3 className="titulo">Cadastrar Registro de Preço</h3>
                </div>
                 <div className="row justify-content-md-center">
                    <div className="col-md-8 order-md-2 mb-4">
                        <form>
                            <fieldset className="form-group fieldset-caixa">
                                <legend className="legend-caixa">Dados Gerais</legend>
                                <div className="form-row">
                                    <div className="col-md-11 mb-3">
                                        <label className="label-caixa-form" htmlFor="NO_SIGLA">Empresa</label>
                                        <AsyncSelect
                                            cacheOptions
                                            defaultOptions
                                            loadOptions={promiseOptions}
                                        />
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                    <div className="col-md-1 mb-3">
                                        <label className="label-caixa-form">&nbsp;</label>
                                        <EmpresaBotaoAdd/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-2 mb-3">
                                        <label className="label-caixa-form" htmlFor="NO_UNIDADE">Processo</label>
                                        <input type="text" className="form-control form-control-sm" id="NO_UNIDADE" placeholder="Unidade" required/>
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label className="label-caixa-form" htmlFor="NO_UNIDADE">Pregão</label>
                                        <input type="text" className="form-control form-control-sm" id="NO_UNIDADE" placeholder="Unidade" required/>
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label className="label-caixa-form" htmlFor="NO_UNIDADE">Ata</label>
                                        <input type="text" className="form-control form-control-sm" id="NO_UNIDADE" placeholder="Unidade" required/>
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label className="label-caixa-form" htmlFor="DT_INAUGURACAO">Início</label>
                                        <input type="date" className="form-control form-control-sm" id="DT_INAUGURACAO" placeholder="HH:MM" maxLength="5" required/>
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label className="label-caixa-form" htmlFor="DT_INAUGURACAO">Término</label>
                                        <input type="date" className="form-control form-control-sm" id="DT_INAUGURACAO" placeholder="HH:MM" maxLength="5" required/>
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                    <div className="col-md-1 mb-3">
                                        <label className="label-caixa-form" htmlFor="VR_BDI">BDI</label>
                                        <MaskedInput
                                            mask={mask100Percent}
                                            className="form-control form-control-sm "
                                            placeholder="BDI"
                                            guide={true}
                                            id="VR_BDI"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                    <div className="col-md-1 mb-3">
                                        <label className="label-caixa-form" htmlFor="VR_MOBILIZACAO">Mobilização</label>
                                        <MaskedInput
                                            mask={mask100Percent}
                                            className="form-control form-control-sm "
                                            placeholder="Mobilização"
                                            guide={true}
                                            id="VR_MOBILIZACAO"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="form-group fieldset-caixa">
                                <legend className="legend-caixa">Região / Municípios</legend>
                                <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                        <label className="label-caixa-form" htmlFor="NO_SIGLA">Região</label>

                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                        <label className="label-caixa-form" htmlFor="NO_SIGLA">Município</label>

                                        <div className="valid-feedback">
                                            Válido
                                        </div>
                                        <div className="invalid-feedback">
                                            Inválido
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <button className="btn btn-sm btn-primary" type="submit">Gravar</button>
                        </form>
                    </div>
                 </div>
            </div>
        )
    }
}