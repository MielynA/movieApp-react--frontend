import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Movies from './containers/Movies';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route component={Navbar} />
        <Route exact component={Home} />
        <Route exact component={Movies} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
