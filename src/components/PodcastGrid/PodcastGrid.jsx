import React from 'react'
import Card from '../Card/Card';
import './PodcastGrid.css'

const  PodcastGrid = ({feed, searchTerm}) => {

  return(
      <div className="podcastContainer">
          {feed && feed.entry.filter((val) => {
            if(searchTerm === ""){
              return val;
            }else if (val['im:name'].label.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }else if (val['im:artist'].label.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map(item => {
            console.log(item)
              const name = item['im:name'].label;
              const image = item['im:image'][2].label;
              const artist = item['im:artist'].label;
              const id = item.id.attributes['im:id'];
              console.log(name)
              return <Card name={name} image={image} artist={artist} id={id}/>
          })}
      </div>
  )
}

export default PodcastGrid

