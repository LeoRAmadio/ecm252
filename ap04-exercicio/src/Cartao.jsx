const Cartao = (props) => {
    return(

        <div className="card">
            <div className="card-header text-muted">
                {props.usuario}
            </div>

            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}


export default Cartao