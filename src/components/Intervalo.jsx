import React from "react";
import { connect } from "react-redux";
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../actions/numeros";

import "./Intervalo.css";

import Card from "./Card";

const intervalo = props => {
    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={props.min} onChange={e => props.alterarMinimo(e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={props.max} onChange={e => props.alterarMaximo(e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = dispatch => {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(intervalo)