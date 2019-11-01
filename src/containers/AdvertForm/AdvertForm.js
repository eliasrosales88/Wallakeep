import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom";
import Axios from 'axios';
import AuthContext from "../../contexts/auth-context";

export class AdvertForm extends Component {

  state = {
    name: "",
    description: "",
    price: "",
    photo: "",
    tags: [],
    type: "",
    createdAt: "",
    updatedAt: "",
  };


  static contextType = AuthContext;


  componentDidMount(){
    
    Axios.get( "http://localhost:3001/apiv1/anuncios/" + this.props.match.params.id )
    .then( response => {
      this.setState(response.data.result);
    })

    this.context.login({
      name: localStorage.getItem("name"),
      lastname: localStorage.getItem("lastname"),
      authenticated: localStorage.getItem("authenticated"),
      back: true
    })

    localStorage.setItem("back", true);
    
    
    Axios.get( "http://localhost:3001/apiv1/tags" )
    .then( response => {
      localStorage.setItem("tags", response.data.results);
      
    })
  }

  componentWillUnmount(){
    localStorage.setItem("back", false);

    this.context.login({
      name: localStorage.getItem("name"),
      lastname: localStorage.getItem("lastname"),
      authenticated: localStorage.getItem("authenticated"),
      back: JSON.parse(localStorage.getItem("back"))
    })
  }

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleCheckbox = (event) => {
    const { name } = event.target;
    const { tags } = this.state;
    
    let tagsToChange = tags;

    tagsToChange.includes(name) ? tagsToChange.splice(tagsToChange.indexOf(name),1) : tagsToChange.push(name);
    console.log(tags);
    

    this.setState({
      [name]: tagsToChange
    });
  }

  
  onSubmit = (event) => {
    event.preventDefault();
    
    Axios.put( "http://localhost:3001/apiv1/anuncios/"+ this.props.match.params.id, this.state )
    .then( response => {
      this.setState(response.data.result)
    })

    }

  
  render() {
    const {  _id, name, description, price, photo, type, createdAt, updatedAt } = this.state;
   
    return (
      <Fragment>
        <div className="row mt-4">
          <div className="offset-md-3 col-md-6 col-xs-12 mb-5 ">
          <div className="card">
            <img src={ photo } className="card-img-top" alt={ name } />
          </div>
          {this.props.match.params.type === "edit" &&
            <Fragment>
              <p><b>Id:</b> {_id}</p>
              <p><b>CreatedAt:</b> {createdAt}</p>
              <p><b>UpdatedAt:</b> {updatedAt}</p>
              <p><b>type:</b> {type}</p>
            
              <form onSubmit={this.onSubmit}>
                  <Fragment>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" value={name} onChange={this.inputHandler} className="form-control" id="name" aria-describedby="name" placeholder="Enter name" />
                    </div>
                  
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input 
                        type="text" 
                        id="price" 
                        className="form-control" 
                        placeholder=" Enter price" 
                        name="price" 
                        value={price} 
                        onChange={this.inputHandler} 
                      /> 
                    </div>
                  
                  
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea 
                        type="text" 
                        id="description" 
                        className="form-control" 
                        placeholder=" Enter Description" 
                        name="description" 
                        value={description} 
                        onChange={this.inputHandler} 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tags">Tags</label> <br />
                      <label>lifestyle</label>
                      <input
                        name= "lifestyle"
                        type="checkbox"
                        checked={this.state.tags.includes("lifestyle")}
                        onChange={this.handleCheckbox}
                      /> <br />
                      <label>mobile</label>
                      <input
                        name= "mobile"
                        type="checkbox"
                        checked={this.state.tags.includes("mobile")}
                        onChange={this.handleCheckbox}
                      /> <br />
                      <label>motor</label>
                      <input
                        name= "motor"
                        type="checkbox"
                        checked={this.state.tags.includes("motor")}
                        onChange={this.handleCheckbox}
                      /> <br />
                      <label>work</label>
                      <input
                        name= "work"
                        type="checkbox"
                        checked={this.state.tags.includes("work")}
                        onChange={this.handleCheckbox}
                      /> <br />
                    </div>

                    <div className="form-group">
                      <div>Type</div>
                        <select value={type} name="type" onChange={this.inputHandler}>
                          <option value="sell">sell</option>
                          <option value="buy">buy</option>
                        </select>
                    </div>
                  </Fragment>   
                <button type="submit" className="btn btn-primary disabled">Submit Changes</button>
              </form>
            </Fragment>
              }
 
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(AdvertForm);
