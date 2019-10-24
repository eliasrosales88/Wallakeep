import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import Advert from '../Advert/Advert'

class AdvertList extends Component {
  state = {
    advert: []
  }

  //Colocar condicional para mostrar al usuario un mensaje en caso de error.
  componentDidMount () {
    Axios.get( "http://localhost:3001/apiv1/anuncios" )
      .then( response => {
        this.setState({advert: response.data.results})
        console.log(response);
        
      })
  }

  render() {
    const adverts = this.state.advert.map( advert => {
      return <Advert key={advert._id} name={advert.name} price={advert.price} description={advert.description} photo={advert.photo} />
    })
    return (
      <Fragment>
        <p>AdvertList works!</p>
        <div className="row justify-content-center">
          {adverts}
        </div>
      </Fragment>
    )
  }
}

export default AdvertList;
