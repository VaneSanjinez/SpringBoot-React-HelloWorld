import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
const API = 'http://localhost:9000/home/hello';
//const API = 'http://localhost:9000/people/all';

class App extends Component {
    constructor(props) {
    super(props);

    //this.state = {
    //  persons: [],
    //};
    this.state = {
      message : '',
    }
   }
   //componentDidMount() {
    /*fetch(API)
      .then(response => {message: response})
      .then(data => this.setState({ message: data }));
      //.then(response => response.json())
      //.then(data => this.setState({ people: data.people }));*/
      
  componentDidMount() {
    /*axios.get(API)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });*/

    axios.get(API)
      .then(res => {
        const message = res.data;
        this.setState({message})
      })
  }

  render() {
    return (
      /*<div className="App">
        <div className="App-header">
          <h2>Welcome to React and Spring</h2>
        </div>
        <p>
          <ul>
              { this.state.persons.map(person => <li>{person.name}</li>)}
          </ul>
        </p>
      </div>*/
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Spring</h2>
        </div>
        <p>
              Getting a message from the server :  {this.state.message}
        </p>
      </div>
    )
  }
}
export default App;
