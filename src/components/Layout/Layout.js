import React from 'react'

const Layout = ( props ) => {
  return (
    <React.Fragment>
      <div className="bg-primary p-3">
        Toolbar
      </div>
      <main className="container-fluid">
        {props.children}
      </main>
    </React.Fragment>
  )
}

export default Layout
