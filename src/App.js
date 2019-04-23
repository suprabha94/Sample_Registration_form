import React, { Component } from 'react';
import './App.css';
import Form from './Components/form'
import { Provider } from 'react-redux';
import store from './store';
import Users from './Components/users';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            Registretion
          </header>
          <Form/>
          <Users/>
        </div>
      </Provider>
    );
  }
}

export default App;
