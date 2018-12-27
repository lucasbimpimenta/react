import axios from 'axios';

import {situacao_cnpj} from '../../actions/actionCreator';

export default class EmpresaApi {

    static cpnjCadastrado(cnpj) {

        return dispatch => {
            axios.get(`http://www.gilogbh.des.mg.caixa/api/empresa/${cnpj}`)
            .then(res => {
                const dados = res.data;
                if(dados.NO_RAZAO_SOCIAL) {
                    dispatch(situacao_cnpj(true));
                } else {
                    dispatch(situacao_cnpj(false));
                }
            })    
        }
    }
}