import React from 'react';
import { Route } from 'react-router-dom';
import MovieContainer from './movie_container.js'
import SessionFormContainer from './login_page/session_form_container'

const App = () => (
  <div className="app">
    <h1>Super Awesome Movie Tracker</h1>
    <Route path='/' component={SessionFormContainer} />
    <Route path='/movies' component={MovieContainer} />
  </div>
);

export default App;
