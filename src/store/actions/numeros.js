
//Action Creator - Recebe os novos valores
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: 'NUM_MIN_ALT',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: 'NUM_MAX_ALT',
        payload: novoNumero
    }
}