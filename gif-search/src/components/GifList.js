import React from "react";
import GifItem from "./GifItem";

const GifList = props => {
  const gifList = props.gifs.map((gif, i) => (
    <div>
      <GifItem gif={gif} key={gif.id} onGifSelect={props.onGifSelect} />
    </div>
  ));
  return <div className="gif-list">{gifList}</div>;
};

export default GifList;
