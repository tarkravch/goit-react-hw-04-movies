import React, { Component } from "react";
import Axios from "axios";
const KEY = "478a6293c6d1ac9e31348f3204c340c0";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    // console.log(response);
    this.setState({ reviews: response.data.results });
    console.log(this.state.reviews);
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          <ul>
            {this.state.reviews.map((review) => (
              <li key={review.id}>
                <h3>Author:{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
