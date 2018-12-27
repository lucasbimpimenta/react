

export function situacao_cnpj(state='',action) {

    if(action.type === 'CNPJ_SITUACAO'){
        return action.existe;
    }

    return state;
}