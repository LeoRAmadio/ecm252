const Comentario = (props) => {
    return (

        <div className="d-flex">
            <i className="fa-solid fa-9x fa-user"></i>
        
            <div className="flex-grow-1 ms-2 ml-2 align-items-center">
                <h3 className="text-start display-6 border-bottom">{props.usuario}</h3>
                <p>{props.texto}</p>
                <p className="bottom-0 start-0 m-0 text-muted">{props.data_hora}</p>
            </div>

        </div>

    )
}

export default Comentario