import React, { Component } from "react";
import Axios from "axios";
import { Route, Link } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import refs from "../refs";
const KEY = "478a6293c6d1ac9e31348f3204c340c0";

class MovieDetailsPage extends Component {
  state = {
    overview: null,
    genres: [],
    id: null,
    poster_path: null,
    title: null,
    vote_average: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
    );

    this.setState({ ...response.data });
  }

  render() {
    const { overview, genres, id, poster_path, title, vote_average } =
      this.state;
    const location = refs.previousLocation;

    return (
      <div>
        <button
          type="button"
          onClick={() => this.props.history.push(location)}
          className="details-btn"
        >
          Go back
        </button>
        <div key={id} className="details-block">
          <div className="details-img">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="300"
              height="300"
            />
          </div>
          <div className="details-info">
            <h1> {title}</h1>
            <p>User score: {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres.length > 0 &&
              genres.map((genre) => {
                return <p>{genre.name}</p>;
              })}
          </div>
        </div>
        <div className="details-additional">
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to={`/movies/${id}/cast`}>Cast</Link>
            </li>
            <Route path={`/movies/:movieId/cast`} component={Cast} />
            <li>
              <Link to={`/movies/${id}/reviews`}>Reviews</Link>
            </li>
            <Route path={`/movies/:movieId/reviews`} component={Reviews} />
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
