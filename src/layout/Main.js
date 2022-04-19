import React from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    response: false,
    loading: true,
  };

  searchMovies = (str, type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=panda`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  render() {
    return (
      <>
        <Search searchMovies={this.searchMovies} />
        <div className="container content">
          {this.state.loading ? (
            <h3>Loading...</h3>
          ) : (
            <Movies movies={this.state.movies} />
          )}
        </div>
      </>
    );
  }
}
