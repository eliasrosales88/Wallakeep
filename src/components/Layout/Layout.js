import React, { Fragment } from 'react'
import Advert from '../Advert/Advert'
import AdvertList from '../AdverList/AdvertList'

const Layout = ( props ) => {

  return (
    <Fragment>
      <div className="bg-primary p-3">
        Toolbar
      </div>
      <main className="container-fluid">
        {props.children}
        <AdvertList />
      </main>
      <footer className="bg-dark">Footer</footer>
    </Fragment>
  )
}

export default Layout
