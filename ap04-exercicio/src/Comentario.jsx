const Comentario = (props) => {
    return (

        <div className="d-flex">
            <div className="d-flex justify-content-center flex-column">
                
            </div>
            <div className="border flex-grow-1 py-3 ms-3">
                <h4 className="text-center">{props.data}</h4>
                <p className="text-center">{props.hora}</p>
            </div>
        </div>

    )
}

export default Comentario