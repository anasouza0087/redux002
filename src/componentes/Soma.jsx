import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
    return (
        <Card title="Soma">
            <span>
                <strong>Resultado: {props.max + props.min}</strong>
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

export default connect(mapStateToProps)(Soma)