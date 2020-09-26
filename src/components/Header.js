import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <Link to='/'>
          <div className="movie-icon" />
        </Link>
        <h1 className="page-title" >Movie Cards Library - CRUD</h1>
      </header>
    );
  }
}

export default Header;
