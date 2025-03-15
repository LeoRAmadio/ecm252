import Comentario from "./Comentario"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
import ListaComentarios from "./ListaComentarios"

const App = () => {

  const textoAprovado = 'Aprovar'
  const textoNAprovado = 'Não Aprovado'
  const funcaoAprovado = () => alert('Comentário Aprovado')
  const funcaoNAprovado = () => alert('Comentário Não Aprovado')
  const componenteFeedback = (
    <Feedback
      textoAprovado={textoAprovado}
      textoNAprovado={textoNAprovado}
      funcaoAprovado={funcaoAprovado}
      funcaoNAprovado={funcaoNAprovado}
    />
  )
  return (
    <div className="container border mt-2">

      <div className='row'>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao usuario ='Leonardo'>

            <Comentario
              data="22/02/2024"
              hora="SSD"
             // foto="https://th.bing.com/th/id/OIP.xvmKsilhQKwy5Lo2dF0ncwHaE8?w=289&h=192&c=7&r=0&o=5&pid=1.7" 
             />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao usuario='Joao'>
            <Comentario
              data="22/02/2024"
              hora="SSD"
              //foto="https://th.bing.com/th/id/OIP.HoRVdvGQVAi52LBl0woIIAHaE8?w=289&h=192&c=7&r=0&o=5&pid=1.7" 
              />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-4">
          <Cartao usuario='Pedro'>
            <Comentario
              data="22/02/2024"
              hora="SSD"
              //foto="https://th.bing.com/th/id/OIP.TaN6f9-aZDGr2bQWn4Vq1QHaE7?w=290&h=192&c=7&r=0&o=5&pid=1.7" 
              />
            {componenteFeedback}
          </Cartao>
        </div>


      </div>

    </div>
  )
}

export default App