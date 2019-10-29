import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";


// AÑADIR TAGS!!!!!
const Advert = ( props ) => {
  const {photo, name, description, price, id, history, buttonsActive = true} = props;

  const detailHandler = () => {
    history.push("advert/"+id)
  }
  
  const editHandler = () => {
    console.log("edit");
    
  }
  
  return (
    <Fragment>
      <div className="card">
        <img src={ photo } className="card-img-top" alt={ name } />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text"><b>Precio: { price }$</b></p>
          <p className="card-text">{ description }</p>
          {buttonsActive &&
            <Fragment>
              <button onClick={detailHandler} className="btn btn-primary">More</button>
              <button onClick={editHandler} className="btn btn-warning ml-1">Edit</button>
            </Fragment>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default withRouter(Advert);
