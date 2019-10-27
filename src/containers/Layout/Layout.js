import React, { Component, Fragment } from 'react'
import AdvertList from '../../components/AdverList/AdvertList'
import { Route, Switch, withRouter } from "react-router-dom";
import Register from '../Register/Register';
import AdvertDetail from '../AdvertDetail/AdvertDetail';
import AuthContext from '../../contexts/auth-context';
import Icon from '@material-ui/core/Icon';

export class Layout extends Component {
  constructor(props){
    super(props)
    console.log(props);    
  }
  static contextType = AuthContext;

  componentDidMount(){
    console.log(this.context);
    
  }
  componentDidUpdate(){
    console.log(this.context);
    
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-primary">

          <span className="text-white" onClick={this.props.history.goBack}><Icon>arrow_back</Icon></span>
          
          <h2 className="text-white">Wallakeep</h2>
          <span className="text-white">{this.context.name} {this.context.lastname}</span>
        </nav>
          <main className="container-fluid">
            {this.props.children}
            <Switch>
              <Route exact path="/" component={Register} />
              <Route path="/list" component={AdvertList} />
              <Route path="/advert/:id" component={AdvertDetail} />
            </Switch>
          </main>
        <footer className="bg-dark">Footer</footer>    
      </Fragment>
    )
  }
}

export default withRouter(Layout);
