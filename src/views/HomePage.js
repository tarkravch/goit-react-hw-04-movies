import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const KEY = "478a6293c6d1ac9e31348f3204c340c0";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <div className="trending">
          <h1>Trending movies</h1>
          <ul>
            {this.state.movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default HomePage;
