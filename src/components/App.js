import React, { Component, createContext } from 'react';
import Form from './Form';
import User from './User';

export const UserContext = createContext();

class App extends Component{
   state = {
   		userInfo: {
   			name: 'Vasya',
   			age: 25,
   			gender: 'male'
   		}
   }

    render(){
      return (
        <div className="container">
          <h1>React Hooks</h1>
          <Form />
          <UserContext.Provider value={this.state.userInfo}>
          	<User />
          </UserContext.Provider>
        </div>
      );
    }
}

export default App;
