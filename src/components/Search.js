import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "panda",
      type: "all",
    };
  }

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="input_wrapper">
          <div className="input">
            <input
              placeholder="Search"
              type="search"
              id="email_inline"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
              autoComplete="off"
            />
          </div>
          <div className="button">
            <button
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Send
            </button>
          </div>
        </div>
        <div className="filterType">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
