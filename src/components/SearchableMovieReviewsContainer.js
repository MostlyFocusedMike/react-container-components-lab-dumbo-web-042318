import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({ 
      searchTerm: e.target.value 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(BASE_URL + this.state.searchTerm)
      .then(r => r.json())
      .then(r => this.setState({ reviews: r.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>search</label>
          <input
            id='input'
            type="text"
            value={this.state.searchTerm} //apparently useless
            onChange={this.handleChange} />
          <button type="submit">submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
export default SearchableMovieReviewsContainer;
