import React, { Component } from 'react'
import Advert from "../../components/Advert/Advert";
import Axios from 'axios';


export class AdvertDetail extends Component {
  constructor(props){
    super(props)
    console.log(props);
    
  }
  state = {
    advert: ""
  }
  componentDidMount(){
    Axios.get( "http://localhost:3001/apiv1/anuncios/"+ this.props.match.params.id )
    .then( response => {
      this.setState({advert: response.data.result})
      console.log(this.state.advert);
      
    })
  }
  render() {
    const { advert } = this.state;
    return (
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2 col-xs-12">
          <Advert
          key={advert._id} 
          name={advert.name} 
          price={advert.price} 
          description={advert.description}
          id={advert._id} 
          photo={advert.photo}
          buttonsActive={false} /> 
          {/* /> */}
        </div>
      </div>
    )
  }
}

export default AdvertDetail
