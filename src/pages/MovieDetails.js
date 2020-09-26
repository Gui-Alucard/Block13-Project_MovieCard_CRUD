import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      requisition: false,
    };
  }

  async componentDidMount() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const movie = await getMovie(id);
    this.setNewState(movie);
  }

  setNewState(newState) {
    this.setState({
      movie: newState,
      requisition: true,
    });
  }

  render() {
    const { movie, requisition } = this.state;
    const { id } = this.props.match.params;
    const { deleteMovie } = movieAPI;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (requisition === false) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="details-container">
        <div className="movie-details" data-testid="movie-details">
          <div className="img-cont">
            <img alt="Movie Cover" src={`../${imagePath}`} />
          </div>
          <div className="movie-info">
            <h4 className="movie-title">{`Title: ${title}`}</h4>
            <p className="movie-subtitle">{`Subtitle: ${subtitle}`}</p>
            <p className="movie-storyline">{`Storyline: ${storyline}`}</p>
            <p className="movie-genre">{`Genre: ${genre}`}</p>
            <div className="rating">
              <p className="movie-rate">{`Rating: ${rating}`}</p>
            </div>
          </div>
        </div>
        <div className="movie-links">
          <Link className="movie-edit" to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link  className="movie-back"to="/">VOLTAR</Link>
          <Link  className="movie-delete" to="/" onClick={() => deleteMovie(id)}>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    isExact: propTypes.bool,
    params: propTypes.shape({
      id: propTypes.string,
      path: propTypes.string,
      url: propTypes.string,
    }),
    path: propTypes.string,
    url: propTypes.string,
  }).isRequired,
};

export default MovieDetails;
