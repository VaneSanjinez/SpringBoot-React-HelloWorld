import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
const API = 'http://localhost:9000/home/hello';

class App extends Component {
   constructor(props){
       super(props);

       this.state ={
        message: '',
      };
   }
   componentDidMount() {
    fetch(API)
      /*.then(response => {message: response})
      .then(data => this.setState({ message: data }));*/
      .then(response => {
            this.setState({
                message: response
            })
        })
          /*fetch('/http://localhost:9000/home/hello')
            .then(res => {
                console.log(res);
                //return res.json()
             })
            .then(message => { 
                console.log(message); 
                this.setState({ message })
             });*/
            /*.then(data)=>{
              let message = data.res =>{
                return (
                  <div>
                    message
                  </div>
                  )
              })

            }*/
         }
   render() {
        /*return (
            <div className="App">
                holaaa
                {data}
            </div>
        );
    }*/

    //const { message } = this.state;

    return (
     <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Spring</h2>
        </div>
        <p>
          Getting a message from the server :  {this.state.greetings}
        </p>
      </div>
    );
  }
}
export default App;
