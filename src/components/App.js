import React, { Component, createContext } from 'react';
import Form from './Form';
import User from './User';
import Counter from './Counter';
import ReverseWord from './ReverseWord';
import Repositories from './Repositories';
import Box from './Box';

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
          <Counter />
          <ReverseWord />
          <Repositories />
          <Box />
        </div>
      );
    }
}

export default App;
