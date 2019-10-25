import React, { Fragment } from 'react'
import Advert from '../Advert/Advert'
import AdvertList from '../AdverList/AdvertList'
import { Route, Link } from "react-router-dom";
import Register from '../../containers/Register/Register';

const Layout = ( props ) => {

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <form className="form-inline">
          <Link to="/"><button className="btn btn-dark" type="button">Home</button></Link>
          <Link to="/list"><button className="btn btn-dark ml-1" type="button">List</button></Link>
        </form>
      </nav>
      <main className="container-fluid m-0 p-0">
        {props.children}
       
          {/* <AdvertList /> */}
      
      </main>
      <footer className="bg-dark">Footer</footer>

      <Route exact path="/" component={Register} />
      <Route path="/list" component={AdvertList} />
      <Route path="/detail" component={Advert} />
    </Fragment>
  )
}

export default Layout
