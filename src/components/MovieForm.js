import React from 'react';
import propTypes from 'prop-types';


class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    const movie = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '',
    };
    this.state = {
      ...props.movie || movie,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="div-validade">
        <label htmlFor="movie_title">Título</label>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="div-form-sub">
        <label htmlFor="movie_subtitle">Subtítulo</label>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          className="form-sub"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row div-form-img">
        <label htmlFor="movie_image">Imagem</label>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          className="form-img"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="div-form-text-area">
        <label htmlFor="movie_storyline">Sinopse</label>
        <textarea
          className="form-text-area"
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="div-form-genre">
        <label htmlFor="movie_genre">Gênero</label>
        <select
          id="movie_genre"
          className="form-genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
          <option value="crime">Crime</option>
          <option value="war">Guerra</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="div-form-rate">
        <label htmlFor="movie_rating">Avaliação</label>
        <input
          placeholder="Dê a avaliação do filme"
          className="form-rate"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          className="form-btn"
          type="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="form-container">
        <div className="movie-form">
          <form>
            {this.renderTitleInput()}
            {this.renderSubtitleInput()}
            {this.renderImagePathInput()}
            {this.renderStorylineInput()}
            {this.renderGenreSelection()}
            {this.renderRatingInput()}
            {this.renderSubmitButton()}
          </form>
        </div>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    imagePath: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.string,
  }).isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default MovieForm;
