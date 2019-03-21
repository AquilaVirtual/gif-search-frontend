import React from 'react'

const GifItem = ({gif}) => {
  const gifImageInfo = gif.images.fixed_height_small
  return (
    <div className="gif-item" >
      <img src={gif.images.downsized.url} alt={gifImageInfo.slug} ></img>
    </div>
  )
}

export default GifItem
