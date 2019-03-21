import React, { Component } from "react";
import axios from "axios";

import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";
import GifModal from "./components/GifModal";
import "./App.css";

//No need to hide API key; this is a public key
const API_KEY = "dc6zaTOxFJmzC";
class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      clickedGif: null,
      modalIsOpen: false
    };
  }

  componentDidMount() {
    this.fetchGifs("jim carey");
  }

  openModal = gif => {
    this.setState({
      modalIsOpen: true,
      clickedGif: gif
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      clickedGif: null
    });
  };

  fetchGifs = searchTerm => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm.replace(
          /\s/g,
          "+"
        )}&api_key=${API_KEY}&limit=25`
      )
      .then(response => {
        this.setState({
          gifs: response.data
        });
        console.log("Getting Gifs!", response);
      })
      .catch(err => {
        console.log("Error getting data", err);
      });
  };
  render() {
    if (!this.state.gifs.data) {
      return null;
    } else {
      return (
        <div className="app">
          <SearchBar onChange={searchTerm => this.fetchGifs(searchTerm)} />
          <GifList
            gifs={this.state.gifs.data}
            onGifClick={clickedGif => this.openModal(clickedGif)}
          />
          <GifModal
            modalIsOpen={this.state.modalIsOpen}
            clickedGif={this.state.clickedGif}
            onRequestClose={() => this.closeModal()}
          />
        </div>
      );
    }
  }
}

export default App;
