import React, { Component, Fragment } from 'react'
import Axios from 'axios';

class AdvertsFilters extends Component {
  constructor(props){
    super(props)
    console.log(props);
    
  }

  state = {
    advert:{
      name: "",
      description: "",
      price: "",
      photo: "",
      tags: [],
      type: "",
      createdAt: "",
      updatedAt: "",
    },
    submitted: false
  };

  filterTypeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    
    Axios.get("http://localhost:3001/apiv1/anuncios?venta=" + (value === "sell" ? "true" : "false"))
      .then((response)=>{
        console.log(response);
        
      },
      (err)=>{
        console.error(err);
      }
      )
  }


  render() {
    const {  _id, name, description, price, photo, type, createdAt, updatedAt } = this.state.advert;
    return (
      <Fragment>
         <div className="form-group">
            <div>Type</div>
            <select value={type} name="type" className="form-control" onChange={this.filterTypeHandler}>
              <option value="sell">sell</option>
              <option value="buy">buy</option>
            </select>
          </div>
      </Fragment>
    )
  }
}

export default AdvertsFilters;
