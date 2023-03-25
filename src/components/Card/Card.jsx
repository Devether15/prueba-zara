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
          <h3 className='card-tittle'>{name.length < 25 ? name : `${name.substring(0, 25)}...`}</h3>
          <p  className='card-author'>Author: {artist.length < 25 ? artist : `${artist.substring(0, 20)}...`}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card