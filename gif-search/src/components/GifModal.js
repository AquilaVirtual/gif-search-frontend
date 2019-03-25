
import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
    if (!props.clickedGif) {
        return <div></div>;
      }
      console.log("Clicked Gif in modal component", props.clickedGif)
      console.log("Is modal open?", props.modalIsOpen)      
      return (
        <Modal
        ariaHideApp={false}
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="gif-modal">
        <img src={ props.clickedGif.images.original.url} alt= {props.clickedGif.slug } />
        <h3>Title: { props.clickedGif.title }</h3>
        <p><strong>Source:</strong> <a href={ props.clickedGif.source }>{ props.clickedGif.source }</a></p>
        <p><strong>Rating:</strong> { props.clickedGif.rating }</p>

        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifModal;
