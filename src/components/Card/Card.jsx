import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({name, image, artist, id}) => {
  return (

    <Link to={`/podcast/${id}`} >
      <div className="cards-container">
        <div className="card-wrapper">
          <img src={image} className="card-img" alt="" />
          <div className="card-info">
          <h5>{name}</h5>
          <p>Author: {artist}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card