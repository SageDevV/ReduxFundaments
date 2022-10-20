import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const sorteio = props => {
    const aleatorio = parseInt(Math.random() * (props.min - props.max) * props.max)
    const resultado = aleatorio <= 0 ? (aleatorio * -1) : aleatorio
    return (
        <Card title="Sorteio de um número" purple>
            <span>
                <span>Resultado:</span>
                <strong>{resultado}</strong>
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

export default connect(mapStateToProps)(sorteio)