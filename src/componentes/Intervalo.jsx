import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo = props => {

    return (
        <Card title="Intervalo">
            <span>
                <strong>Valor mínimo:</strong>
                <input
                    type="number"
                    value={props.min}
                    onChange={
                        e => props.altMin(+e.target.value)
                    }
                />
            </span>
            <span>
                <strong>Valor máximo:</strong>
                <input
                    type="number"
                    value={props.max}
                    onChange={
                        e => props.altMax(+e.target.value)
                    }
                />
            </span>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapActionDispatchToProps = (dispatch) => {
    return {
        altMin(novoNumero) {
            //Action Creator - Retorna uma action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        altMax(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default
    connect(
        mapStateToProps,
        mapActionDispatchToProps
    )
        (Intervalo)