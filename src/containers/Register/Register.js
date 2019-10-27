import React, { Component, Fragment } from 'react';
import AuthContext from "../../contexts/auth-context";
import { withRouter } from "react-router-dom";


export class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      lastname: "",
      authenticated: false
    }
  }
  
  // Adding uth-context
  static contextType = AuthContext;
  
  componentDidUpdate(){
   

    console.log(this.context);
  }
  componentDidMount(){
    console.log(this.context);
    if (this.context.authenticated) {
      this.props.history.push("list");
    }
    if (localStorage.getItem("registered")) {
      this.setState({
        registered: true
      })
    }
  }
  inputHandler = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });

  }

  onBlurHandler = () => {
    this.setState({
      touched: true
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { name, lastname } = this.state;

    this.onBlurHandler();

    if ( name.length > 0 && lastname.length > 0 ) {
      localStorage.setItem("name", name);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("registered", "true");
      localStorage.setItem("authenticated", "true");
      
      this.setState({
        name: name,
        lastname: lastname,
        authenticated: true
      })
      
      this.context.authenticated = true;
      
      this.props.history.push("list");

    }
    
  }

  render() {
    const { name, lastname, touched, registered } = this.state;
    
    return (
      <Fragment>
      <div className="row mt-4">
        <div className="offset-md-3 col-md-6 col-xs-12 ">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            {registered ? <h1>Login</h1> : <h1>Register</h1> }
            <label htmlFor="exampleInputEmail1">Name*</label>
            <input type="text" name="name" value={name} onChange={this.inputHandler} onBlur={this.onBlurHandler} className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter name" />
            { name.length === 0 && touched &&
              <small id="nameHelp" className="form-text text-danger">Name should not be empty</small>
            }
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLastname1">Lastname*</label>
            <input type="text" name="lastname" value={lastname} onChange={this.inputHandler} onBlur={this.onBlurHandler} className="form-control" id="exampleInputLastname1" placeholder=" Enter Lastname" />
            { lastname.length === 0 && touched &&
              <small id="lastnameHelp" className="form-text text-danger">Lastname should not be empty</small>
            }
          </div>
          <button type="submit" className="btn btn-primary disabled">Submit</button>
          <small id="requiredText" className="form-text text-muted">(*) Required</small>
        </form>
        </div>
    
      </div>
      </Fragment>
    )
  }
}

export default withRouter(Register);
