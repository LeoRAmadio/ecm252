import env from 'react-dotenv'
import { createClient } from 'pexels'
import Busca from "./components/Busca"
import React from 'react'
import pexelsClient from './utils/pexelsClient'
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo'
export default class App extends React.Component {

  //pexelsClient = null

  state = {
    photos: []
  }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query:termo
      }
    })
    .then(result => this.setState({photos: result.data.photos}))
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query:termo
  //   })
  //   .then(result => this.setState({photos: result.photos}))
  // }

  // componentDidMount(){
  //   console.log(env.PEXELS_KEY)
  //   this.pexelsClient = createClient(env.PEXELS_KEY)
  // }

  render(){
    return (
      <div className="grid border-1 justify-content-center w-9 m-auto border-200">
        <div className='col-12 text-center'>
          <PexelsLogo/>
        </div>
        <div className="col-12 text-center">
          <h4>Exibir uma lista de...</h4>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className='col-12'>
          <div className='grid'>
            <ListaImagens imgStyle={'md:col-6 lg:col-4 xl: col-3'} photos={this.state.photos}/>
          </div>
              
          
        </div>
      </div>
    )
  }
}