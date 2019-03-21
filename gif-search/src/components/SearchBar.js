import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  handleSearchChange(searchTerm) {
    this.setState({ searchTerm })
    this.props.onChange(searchTerm)
  }

  render() {
    return (      
        <div className="search">          
            <input
              type="text"
              placeholder="Enter text to search for gifs!"
              value={this.state.searchTerm}
              onChange={(event) => this.handleSearchChange(event.target.value)}
            />          
        </div>
      
    )
  }
}

export default SearchBar
