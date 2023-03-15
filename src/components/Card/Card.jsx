import React from 'react'
import './Card.css'

const Card = ({name, image, artist}) => {
  return (
    <div>
      <img src={image} className="podcastImage" alt="" />
      <div className='cardBox'>
        <h5>{name}</h5>
        <p>Author: {artist}</p>
      </div>
    </div>
  )
}

export default Card