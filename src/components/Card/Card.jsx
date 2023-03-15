import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({name, image, artist, id}) => {
  return (
    <Link to={`/podcast/${id}`} >
      <img src={image} className="podcastImage" alt="" />
      <div className='cardBox'>
        <h5>{name}</h5>
        <p>Author: {artist}</p>
      </div>
      </Link>
  )
}

export default Card