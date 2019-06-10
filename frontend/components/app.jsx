import React from 'react';
import { Route } from 'react-router-dom';
import MovieContainer from './movie_container.js'

const App = () => (
  <div className="app">
    <h1>Super Awesome Movie Tracker</h1>
    <Route path='/movie' component={MovieContainer} />
  </div>
);

export default App;
