import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import refs from "../refs";
const KEY = "478a6293c6d1ac9e31348f3204c340c0";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  async componentDidMount() {
    if (refs.searchQuery !== "") {
      await this.setState({ query: refs.searchQuery });
      this.searchMovie();
      this.setState({ query: "" });
    } else {
      return;
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ query: e.currentTarget.value });
    this.searchMovie();
    this.setState({ query: "" });
  };

  async searchMovie() {
    const { query } = this.state;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
    );
    refs.previousLocation = this.props.location;
    refs.searchQuery = query;

    this.setState({ movies: response.data.results });
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChange}
          />
          <button type="submit" className="form-btn">
            Search
          </button>
        </form>

        <div className="movies-block">
          <ul className="movies-list">
            {this.state.movies.map((movie) => (
              <li key={movie.id} className="movies-item">
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width="150"
                    height="150"
                  />
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default MoviesPage;
