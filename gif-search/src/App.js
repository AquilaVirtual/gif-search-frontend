import React, { Component } from "react";
import axios from "axios";

import GifList from "./components/GifList" 
import "./App.css";

//No need to hide API key, because it is a public key
const API_KEY = "dc6zaTOxFJmzC";
class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: {}
    };
  }

  componentDidMount() {
    this.fetchGifs("jim carey");
  }

  fetchGifs(searchTerm) {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=25`
      )
      .then(response => {
        this.setState({
          gifs: response.data
        })
        console.log("Getting Gifs!", response);
      })
      .catch(err => {
        console.log("Error getting data", err);
      });
  }
  render() {
    if(!this.state.gifs.data) {
      return null
    } else {
      return (
        <div className="App">          
            <GifList gifs={this.state.gifs.data}
            onGifSelect={selectedGif => this.openModal(selectedGif) }
            />
        </div>
      );
    }    
  
  }
}

export default App;
