import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';
import { Header } from './components/index';

import './App.css';
import './components/MovieForm.css';
import './pages/MovieDetails.css';

function App() {
  return (
    <div className="body-html">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/movies/new"><NewMovie /></Route>
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route exact path="/"><MovieList /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
