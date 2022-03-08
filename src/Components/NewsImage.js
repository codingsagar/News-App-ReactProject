import React from 'react'
import ImageError from "../Images/noImage.png";

const NewsImage = ({url,title}) => {
  return (
    <div className="news_image">
        <img src={url ? url : ImageError}  onError={(e)=>e.target.src = ImageError} alt={title.slice(0,20)} title={title.slice(0,20)}/>
      </div>
  )
}

export default NewsImage