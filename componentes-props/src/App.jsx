import Pedido from "./Pedido"
const App = () => {
  return (
    <div className="container border mt-2">

      <div className='row'>

        <div className="col-sm-12 col-lg-6 col-xxl-3">

          <Pedido
            data="22/02/2024"
            titulo="SSD"
            descricao="Um SSD de 512Gb"
            icone="hdd" />

        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">

          <Pedido
            data="23/01/2024"
            titulo="Livro"
            descricao="Harry Potter"
            icone="book" />

        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">

          <Pedido
            data="27/08/2024"
            titulo="Hipopótamo"
            descricao="De verdade"
            icone="hippo" />

        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">

          <Pedido
            data="22/10/2022"
            titulo="Boneco de neve"
            descricao="Balanga sozinho"
            icone="snowman fa-shake" />

        </div>

      </div>

    </div>
  )
}

export default App