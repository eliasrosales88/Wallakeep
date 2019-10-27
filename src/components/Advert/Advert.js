import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";

//Colocar href cuando creemos la vista de detalle
const Advert = ( props ) => {
  const {photo, name, description, price, id, history} = props;

  const detailHandler = () => {
    history.push("advert/"+id)
  }
  
  
  return (
    <Fragment>
      <div className="card">
        <img src={ photo } className="card-img-top" alt={ name } />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text"><b>Precio: { price }$</b></p>
          <p className="card-text">{ description }</p>
          <button onClick={detailHandler} className="btn btn-primary">More</button>
          <button onClick={detailHandler} className="btn btn-warning ml-1">Edit</button>
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(Advert);
