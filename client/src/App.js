import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
const API = 'http://localhost:9000/home/hello';

class App extends Component {
   constructor(){
       super();

       this.state ={
        message: [],
      };
   }
   componentDidMount() {
    fetch(API)
      .then(response => {console.log(response)})
      .then(data => this.setState({ message: data }));
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

    const { message } = this.state;

    return (
      <div> MESSAGE!!!!!!!
        {String(this.state.message)}
      </div>
    );
  }
}
export default App;
