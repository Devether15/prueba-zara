import React, { useState,useEffect, useMemo } from 'react'
import useFetchDetail from '../../hooks/use-fetch-detail'
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import CardPodcastDetail from '../../components/CardPodcastDetail/CardPodcastDetail';
import './EpisodeDetail.css'

const EpisodeDetail = () => {
  const { id, trackID } = useParams();

  const {data, isLoading, isFetching } = useFetchDetail(id)
  const [rawData, setRawdata] = useState({});
  useEffect(() => {
    if(!isFetching && !isLoading){
      setRawdata(data)
   }
  }, [data,isFetching, isLoading])

  const results = rawData?.data?.results;


  const tableData =  useMemo(()=>{
    return results || []
  },[results])

  const myObject = tableData.find((item) => {
    return item.trackId == trackID;
  });
  
  const trackName = myObject?.trackName;
  const collectionName = myObject?.trackName;
  const artworkUrl600 = myObject?.artworkUrl600;
  const description = myObject?.description;
  const episodeUrl = myObject?.episodeUrl;

  return (
    <>
      <Header isLoading={isLoading}/>
      <div className='podcastDetailContainer'>
        <div>
          <div>
            <CardPodcastDetail trackName={trackName} artistName={collectionName} artworkUrl600={artworkUrl600} description={description} />
          </div>
          </div>        
          <div>
          <div className='episode-container'>
            <h2>{trackName}</h2>
            <p>{description}</p>
            <iframe title="myFrame" src={episodeUrl}></iframe>
            
          </div> 

          
          </div>        
      </div>
    </>
  )
}

export default EpisodeDetail