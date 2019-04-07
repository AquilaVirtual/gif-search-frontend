import React from "react";

class SearchBar extends React.Component {
  handleSearchChange(searchTerm) {
    this.props.onSearchChange(searchTerm);
  }
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Enter text to search for gifs!"
          onChange={event => this.handleSearchChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
