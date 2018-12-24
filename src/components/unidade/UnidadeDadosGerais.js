import React, { Component } from 'react';

export default class UnidadeDadosGerais extends Component {

    render() {
        return (
            <fieldset className="form-group fieldset-caixa">
                <legend className="legend-caixa">Dados Gerais</legend>
                <div className="form-row">
                    <div className="col-md-1 mb-3">
                    <label className="label-caixa-form" for="CO_UNIDADE">Código</label>
                    <input type="text" className="form-control form-control-sm" id="CO_UNIDADE" placeholder="Código" maxlength="4" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                    <div className="col-md-2 mb-3">
                    <label className="label-caixa-form" for="CO_TP_UNIDADE">Tipo</label>
                    <input type="text" className="form-control form-control-sm" id="CO_TP_UNIDADE" placeholder="Tipo"  maxlength="2" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                    <div className="col-md-7 mb-3">
                    <label className="label-caixa-form" for="NO_UNIDADE">Nome</label>
                    <input type="text" className="form-control form-control-sm" id="NO_UNIDADE" placeholder="Nome da unidade" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                    <div className="col-md-2 mb-3">
                    <label className="label-caixa-form" for="NO_SIGLA">Sigla</label>
                    <input type="text" className="form-control form-control-sm" id="NO_SIGLA" placeholder="Sigla" maxlength="8" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-2 mb-3">
                    <label className="label-caixa-form" for="CO_UNIDADE">Inauguração</label>
                    <input type="date" className="form-control form-control-sm" id="CO_UNIDADE" placeholder="HH:MM" maxlength="5" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                    <div className="col-md-2 mb-3">
                    <label className="label-caixa-form" for="CO_UNIDADE">Encerramento</label>
                    <input type="date" className="form-control form-control-sm" id="CO_UNIDADE" placeholder="HH:MM" maxlength="5" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                    <div className="col-md-2 mb-3">
                    <label className="label-caixa-form" for="CO_UNIDADE">Abertura</label>
                    <input type="time" className="form-control form-control-sm" id="CO_UNIDADE" placeholder="HH:MM" maxlength="5" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                    <div className="col-md-2 mb-3">
                    <label className="label-caixa-form" for="CO_UNIDADE">Fechamento</label>
                    <input type="time" className="form-control form-control-sm" id="CO_UNIDADE" placeholder="HH:MM" maxlength="5" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                    <div className="col-md-4 mb-3">
                    <label className="label-caixa-form" for="NO_UNIDADE">E-mail</label>
                    <input type="email" className="form-control form-control-sm" id="NO_UNIDADE" placeholder="Nome da unidade" required/>
                    <div className="valid-feedback">
                        Válido
                    </div>
                    <div className="invalid-feedback">
                        Inválido
                    </div>
                    </div>
                </div>
                </fieldset>
        );
    }
}