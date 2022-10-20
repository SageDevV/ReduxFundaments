import React from "react";
import { connect } from "react-redux"

import Card from "./Card";

const media = props => {
    const media = (props.min + props.max) / 2
    return (
        <Card title="Média de números" green>
            <span>
                <span>Resultado:</span>
                <strong>{media}</strong>
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

export default connect(mapStateToProps)(media)