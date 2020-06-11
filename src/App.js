import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Header from './components/shared/Header'
import Navbar from './components/shared/Navbar'

import Latest from './components/movies/Latest';
import Popular from './components/movies/Popular';
import MovieDetails from './components/movies/MovieDetails';


function App() {
  return (
    <div className="container">
    <Router>
      <Header />
      <Navbar />

        <Switch>
          <Route exact path="/movie/latest" activeClassName='active'>
            <Latest />
          </Route>
          
          <Route exact path="/movie/popular">
            <Popular />
          </Route>

          <Route exact path="/movie/:movie_id">
            <MovieDetails />
          </Route>

        </Switch>
    </Router>

    </div>
  );
}

export default App;
