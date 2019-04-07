import React, { Component } from "react";
import * as Actions from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBar from "../components/SearchBar";
import GifList from "../components/GifList";
import GifModal from "../components/GifModal";
import "../styles/App.css";

class Home extends Component {
  componentDidMount() {
    this.props.actions.searchGifs("jim carey");
  }
  render() {
    return (
      <div className="app">
        <SearchBar onSearchChange={this.props.actions.searchGifs} />
        <GifList
          gifs={this.props.gifs}
          onGifClick={clickedGif =>
            this.props.actions.openModal({ clickedGif })
          }
        />
        <GifModal
          modalIsOpen={this.props.modalIsOpen}
          clickedGif={this.props.clickedGif}
          onRequestClose={this.props.actions.closeModal}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    gifs: state.gifs.data,
    clickedGif: state.modal.clickedGif,
    modalIsOpen: state.modal.modalIsOpen
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
