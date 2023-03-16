import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CardPodcastDetail = ({ trackName, artistName, artworkUrl600, trackId}) => {
  const { id } = useParams();
  
  return (
    <Link to={`/podcast/${id}/episode/${trackId}`} >
        <img src={artworkUrl600} alt=""/>
        <div>
            <h3>{trackName}</h3>
            <h5>{artistName}</h5>
        </div>
        <div>
            <h4>Descirption</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam, unde, dignissimos beatae autem sapiente perspiciatis vero cupiditate distinctio tempore facere ducimus quas officia consequatur iure et tempora itaque accusamus?</p>
        </div>
      </Link>
  )
}

export default CardPodcastDetail