import React from 'react'

const Feedback = props => {
    return (
        //.d-flex.justify-content-evenly.m-2
        <div className="d-flex justify-content-center m-2 gap-2">
            <button
                className='btn btn-outline-primary'
                type="button" onClick={props.funcaoAprovado}>
                {props.textoAprovado}
            </button>
            <button
                className='btn btn-outline-danger'
                type='button' onClick={props.funcaoNAprovado}>
                {props.textoNAprovado}
            </button>
        </div>
    )
}

export default Feedback