import React, { Component } from "react";
import axios from "axios";


import GifsTemp from "../components/GifsTemp";
import { connect } from "react-redux";
import "../styles/App.css";

//No need to hide API key; this is a public key
const API_KEY = "dc6zaTOxFJmzC";
class App extends Component {
  constructor() {
    super();    
  }
  render() {
    
      return (
        <div className="app">
          <GifsTemp gifs={this.props.gifs} />
        </div>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
        gifs: state.gifs
      }
    }

export default connect(mapStateToProps)(App);
