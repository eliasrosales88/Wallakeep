import React, { Fragment } from 'react'

//Colocar href cuando creemos la vista de detalle
const Advert = ( props ) => {
  const {photo, name, description} = props;

  
  return (
    <Fragment>
      <div className="card">
        <img src={ photo } className="card-img-top" alt={ name } />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text">{ description }</p>
          <a href="#" className="btn btn-primary">More</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Advert
