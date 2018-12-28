

export function situacao_cnpj(state={ existe: null },action) {

    switch (action.type) {
        case 'CNPJ_SITUACAO':
            return {
                ...state,
                existe: action.existe
            };
        default:
            return state;
    }
}