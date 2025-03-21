import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Não chegou ainda'
  const funcaoOK = () => alert('Agradecemos a confirmação')
  const funcaoNOK = () => alert('Verificaremos o ocorrido')
  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return (
    <div className="container border mt-2">
      
      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>

      <div className='row'>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>

            <Pedido
              data="22/02/2024"
              titulo="SSD"
              descricao="Um SSD de 512Gb"
              icone="hdd" />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data="23/01/2024"
              titulo="Livro"
              descricao="Harry Potter"
              icone="book" />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data="27/08/2024"
              titulo="Hipopótamo"
              descricao="De verdade"
              icone="hippo" />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/10/2022"
              titulo="Boneco de neve"
              descricao="Balanga sozinho"
              icone="snowman fa-shake" />
            {componenteFeedback}
          </Cartao>
        </div>

      </div>

    </div>
  )
}

export default App