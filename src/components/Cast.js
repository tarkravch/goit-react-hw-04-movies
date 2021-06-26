import React, { Component } from "react";
import Axios from "axios";
const KEY = "478a6293c6d1ac9e31348f3204c340c0";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    console.log(response.data.cast);
    this.setState({ cast: response.data.cast });
    console.log(this.state.cast);
  }

  render() {
    return (
      <>
        <ul className="cast">
          {this.state.cast.map((credit) => (
            <li key={credit.id} className="cast-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                alt={credit.name}
                width="100"
                height="150"
              />
              <p>{credit.name}</p>
              <p>{credit.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
