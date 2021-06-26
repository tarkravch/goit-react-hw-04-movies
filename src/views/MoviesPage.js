import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const KEY = "478a6293c6d1ac9e31348f3204c340c0";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
    console.log(e);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.setState({ query: e.currentTarget.value });
    console.log(this.state.query);
    this.searchMovie();
    this.setState({ query: "" });
  };

  async searchMovie() {
    const { query } = this.state;
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
    );
    console.log(query);
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

        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${match.url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
