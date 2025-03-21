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

    <ListaComentarios>

      <div className='row'>
        
        <div className="col-12">
          <Cartao>

            <Comentario
              usuario ='Leonardo'
              data_hora={new Date().toLocaleString('pt-BR', {timezone:'UTC'})}
              texto="Você não vai acreditar. Mas você cabia aqui. Eu segurava você e dizia “Esse menino vai ser o melhor menino do mundo. Esse menino vai ser melhor do que qualquer um que conhecemos.”. E você cresceu bom, maravilhoso."
              foto="https://th.bing.com/th/id/OIP.xvmKsilhQKwy5Lo2dF0ncwHaE8?w=289&h=192&c=7&r=0&o=5&pid=1.7" 
             />
          </Cartao>
          {componenteFeedback}
        </div>

        <div className="col-12">
          <Cartao>
            <Comentario
              usuario='Joao'
              texto='Agora deixa as pessoas botarem o dedo na sua cara e dizer que você não é bom. Eu vou te dizer uma coisa que você já sabe: O mundo não é um grande arco-íris. É um lugar sujo, é um lugar cruel. Que não quer saber o quanto você é durão. Vai botar você de joelhos e você vai ficar de joelhos para sempre se você deixar.'
              data_hora={new Date().toLocaleString('pt-BR', {timezone:'UTC'})}
              foto="https://th.bing.com/th/id/OIP.HoRVdvGQVAi52LBl0woIIAHaE8?w=289&h=192&c=7&r=0&o=5&pid=1.7" 
              />
          </Cartao>
          {componenteFeedback}
        </div>
        <div className="col-12">
          <Cartao>
            <Comentario
              usuario='Pedro'
              texto='Nem você, eu ou ninguém vai bater tão forte quanto a vida. Mas a questão não é o quão forte você bate, mas sim o quanto você aguenta apanhar e continuar seguindo em frente. É assim que se vence uma luta!'
              data_hora={new Date().toLocaleString('pt-BR', {timezone:'UTC'})}
              foto="https://th.bing.com/th/id/OIP.TaN6f9-aZDGr2bQWn4Vq1QHaE7?w=290&h=192&c=7&r=0&o=5&pid=1.7" 
              />
          </Cartao>
          {componenteFeedback}
        </div>


      </div>

      </ListaComentarios>
  )
}

export default App