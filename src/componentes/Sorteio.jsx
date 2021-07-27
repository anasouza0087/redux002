import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
    return (
        <Card title="Sorteio">
            <span>
                <strong>Valor sorteado:
                    {
                        parseInt(
                            Math.random() * (props.max - props.min) + props.min
                        )
                    }
                </strong>
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

export default connect(mapStateToProps)(Sorteio)