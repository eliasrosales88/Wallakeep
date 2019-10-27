import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Advert from '../Advert/Advert';
import  AuthContext  from "../../contexts/auth-context";
import { withRouter } from "react-router-dom";


class AdvertList extends Component {
  
  // Adding context
  static contextType = AuthContext;
  
  
  state = {
    advert: []
  }
  
  componentDidMount () {
    console.log(this.context);
    
    if (!this.context.authenticated) {
      this.props.history.replace("/");
      return;
    }
    Axios.get( "http://localhost:3001/apiv1/anuncios" )
      .then( response => {
        this.setState({advert: response.data.results})
        console.log(response);
        
      })

      
  }

  render() {
    console.log("Advert");
    
    const adverts = this.state.advert.map( advert => {
      return <Advert 
        key={advert._id} 
        name={advert.name} 
        price={advert.price} 
        description={advert.description}
        id={advert._id} 
        photo={advert.photo} />
    })
    return (
      <Fragment>
          <div className="row justify-content-center">
            <div className="col-xs-12 advertGrid">
              {adverts}
            </div>
          </div>
      </Fragment>
    )
  }
}

export default withRouter(AdvertList);
