import React from "react";
import GifItem from "./GifItem";

const GifList = props => {
  const gifList = props.gifs.map((gif) => (
    <div key={gif.id}>
      <GifItem gif={gif}  onGifClick={props.onGifClick} />
    </div>
  ));
  return <div className="gif-list">{gifList}</div>;
};

export default GifList;
