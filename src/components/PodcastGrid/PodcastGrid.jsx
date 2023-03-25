import React from 'react'
import Card from '../Card/Card';
import './PodcastGrid.css'

const  PodcastGrid = ({feed}) => {
  console.log(feed)
  return(
      <div className="podcastContainer">
          {feed && feed.map(item => {
              const name = item['im:name'].label;
              const image = item['im:image'][2].label;
              const artist = item['im:artist'].label;
              const id = item.id.attributes['im:id'];
              // const description = item.summary.label;
              // localStorage.setItem('desc', description);
              return <Card name={name} image={image} artist={artist} id={id} key={id}/>
          })}
      </div>
  )
}

export default PodcastGrid

