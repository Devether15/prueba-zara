import React from 'react'
import Card from '../Card/Card';
import './PodcastGrid.css'

const PodcastGrid = ({feed}) => {
  // console.log(feed)

  return(
      <div className="podcastContainer">
          {feed && feed.entry.map(item => {
            console.log(item)
              // const { im:image,title,id,description,category} = item;
              const name = item['im:name'].label;
              const image = item['im:image'][2].label;
              const artist = item['im:artist'].label;
              console.log(name)
              return <Card name={name} image={image} artist={artist}/>
          })}
      </div>
  )
}

export default PodcastGrid

