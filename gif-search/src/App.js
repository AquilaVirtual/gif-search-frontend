import React, { Component } from "react";
import axios from "axios";
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
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=100`
      )
      .then(response => {
        console.log("Getting Gifs!", response);
      })
      .catch(err => {
        console.log("Error getting data", err);
      });
  }
  render() {
    return <div className="App" />;
  }
}

export default App;
