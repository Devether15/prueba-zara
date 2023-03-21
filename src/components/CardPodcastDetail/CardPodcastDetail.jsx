import React from 'react';
import './CardPodcastDetail.css'

const CardPodcastDetail = ({ trackName, artistName, artworkUrl600}) => {
   
  return (
    <div className='CardPodcastDetailContainer'>
      <div className='CardPodcastDetailImgContainer'>
        <img className='CardPodcastDetailImg' src={artworkUrl600} alt=""/>
      </div>
      <div className="line"></div>      
      <div>
          <h3>{trackName}</h3>
          <h5>{artistName}</h5>
      </div>
      <div className="line"></div>       
      <div className='CardPodcastDetailDescription'>
          <h4>Description</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam, unde, dignissimos beatae autem sapiente perspiciatis vero cupiditate distinctio tempore facere ducimus quas officia consequatur iure et tempora itaque accusamus?</p>
      </div>
    </div>
  )
}

export default CardPodcastDetail