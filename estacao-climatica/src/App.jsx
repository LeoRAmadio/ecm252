//rafce
//estado de um componente react: objeto javascript
//se um componente é de estado ele esta envolvido na tela da aplicacao

import React from 'react'
import Hippo from './Hippo'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    icone: null,
    mensagemDeErro: null
  }

  // constructor(props) {
  //   super(props) //chamando construtor da classe pai ; garante o funcionamento do props
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacao_climatica: null,
  //     data: null,
  //     icone: null,
  //     mensagemDeErro: null
  //   } //listando todos os objetos de estado
  //   console.log('constructor')
  // }
  
  componentDidMount(){
    console.log('componentDidMount')
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  estacoes = {

    VERAO: {
      icone: "sun",
      nome: "Verão"
    },

    INVERNO: {
      icone: "snowman",
      nome: "Inverno"
    },

    OUTONO: {
      icone: "leaf",
      nome: "Outono"
    },

    PRIMAVERA: {
      icone: "fan",
      nome: "Primavera"
    }

  }


  obterEstacao = (data, latitude) => {

    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    const d2 = new Date(anoAtual, 8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual, 2, 21)

    const estouNoSul = latitude < 0 //? true : false

    if (data >= d1 && data < d2)
      return estouNoSul ? this.estacoes.INVERNO : this.estacoes.VERAO
    if (data >= d2 && data < d3)
      return estouNoSul ? this.estacoes.PRIMAVERA : this.estacoes.OUTONO
    if (data >= d3 || data < d4)
      return estouNoSul ? this.estacoes.VERAO : this.estacoes.INVERNO
    return estouNoSul ? this.estacoes.OUTONO : this.estacoes.PRIMAVERA
  }

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //1. extrair a data atual do sistema
        const dataAtual = new Date()
        //2. obter a estacao do climatica do usuario usando sua latitude e data atual
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude)
        //3. obter o icone apropriado para aquela estacao
        const icone = estacao.icone
        //4. atualizar o estado, causando, como efeito colateral a atualização da tela
        //dica: use a função setState para atualizar o estado
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao.nome,
          icone: icone
        })

      },
      (err) => {
        //não faça isso
        //this.state.mensagemDeErro = "oi"  isso só att a variavel e não a tela
        //faça isso
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
      }
    )
  }


  render() {
    console.log('render')
    return (
      <div className="container mt-2 text-center">
        <div className="row">
          <div className="col-12">
            <div className="justify-content-center d-flex">
              {Hippo()}
            </div>

          </div>
        </div>
        <div className='row justify-content-center'>
          {/* .col-sm-12.col-lg-6.col-xxl-4 */}
          <div className="col-sm-12 col-lg-6 col-xxl-4">
            {
              (!this.state.latitude && !this.state.mensagemDeErro) ?
              <Loading mensagem="Por favor, responda à solicitação de localização" />
              :

                this.state.mensagemDeErro ?

                //p.border.rounded.p-2.fs-1.text-center
                <p className="border rounded p-2 fs-1 text-center">
                  É preciso dar permissão para acesso à localização
                </p>
                :

                  <EstacaoClimatica
                  latitude = {this.state.latitude}
                  longitude = {this.state.longitude}
                  estacao = {this.state.estacao}
                  icone = {this.state.icone}
                  mensagemDeErro={this.state.mensagemDeErro}
                  obterLocalizacao={this.obterLocalizacao}
              />
            }
            

          </div>
        </div>

      </div>

    )
  }
}

export default App