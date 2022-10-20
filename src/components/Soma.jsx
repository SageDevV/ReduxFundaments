import React from "react";
import { connect } from "react-redux"

import Card from "./Card";

const soma = props => {
    const soma = props.min + props.max
    return (
        <Card title="Soma de números" blue>
            <span>
                <span>Resultado:</span>
                <strong>{soma}</strong>
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
export default connect(mapStateToProps)(soma)