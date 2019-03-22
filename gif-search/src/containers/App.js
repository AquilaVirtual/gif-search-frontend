import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import * as Actions from "../actions"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GifList from "../components/GifList";
import "../styles/App.css";


class App extends Component {
  
  render() {    
      return (
        <div className="app">  
          <SearchBar onSearchChange={this.props.actions.searchGifs} />
          <GifList gifs={this.props.gifs} />
        </div>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
        gifs: state.gifs.data
      }
    }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Actions, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
