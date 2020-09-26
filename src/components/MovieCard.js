import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div className="movie-card" >
        <div className="movie-card-detail">
          <Link className="movie-card-detail" to={`/movies/${id}`}>
            <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
            <div className="movie-card-body">
              <h4 className="movie-card-title">{title}</h4>
              <p className="movie-card-storyline">{storyline}</p>
            </div>
          <span className="movie-card-a">VER DETALHES</span></Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    id: propTypes.number,
  }).isRequired,
};

export default MovieCard;
