import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
// import NavBar from "../components/Navbar";
import refs from "../refs";
const KEY = "478a6293c6d1ac9e31348f3204c340c0";
const linkToMark = document.querySelector(".nav");

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    );
    this.setState({ movies: response.data.results });
    refs.previousLocation = this.props.location;
    refs.searchQuery = "";

    linkToMark.firstChild.classList.add("NavLink--active");
  }
  componentWillUnmount() {
    linkToMark.firstChild.classList.remove("NavLink--active");
  }

  render() {
    return (
      <>
        <div className="trending">
          <h1 className="trending-title">Trending movies</h1>
          <div className="movies-block">
            <ul className="movies-list">
              {this.state.movies.map((movie) => (
                <li key={movie.id} className="movies-item">
                  <Link to={`/movies/${movie.id}`}>
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
        </div>
      </>
    );
  }
}

export default HomePage;
