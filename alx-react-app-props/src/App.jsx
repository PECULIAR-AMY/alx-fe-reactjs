import React, { Component} from 'react';
import './App.css';
import UserDetails from './Components/UserDetails';
import UserContext from './Components/UserContext';


class App extends Component {
  render() {
     const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
    return (
      <div className='App'>
        <UserContext.Provider  value={ {userData} }>
            <UserDetails />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
