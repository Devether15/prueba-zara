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

