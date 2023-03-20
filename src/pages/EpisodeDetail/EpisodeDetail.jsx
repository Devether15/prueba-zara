import React from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom';


const EpisodeDetail = () => {
const { episodeUrl } = useParams();
console.log("episodeUrl",episodeUrl)

  return (
    <>
      <Header />    
      <div>EpisodeDetail</div>
    </>
  )
}

export default EpisodeDetail