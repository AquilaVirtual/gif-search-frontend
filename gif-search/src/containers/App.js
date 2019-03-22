import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import * as Actions from "../actions"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
          <SearchBar onSearchChange={this.props.actions.searchGifs} />
        </div>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
        gifs: state.gifs
      }
    }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
