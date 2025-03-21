const Cartao = (props) => {
    return(

        <div className="card rounded m-2 p-2 shadow">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}


export default Cartao