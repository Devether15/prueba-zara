import React, { useState,useEffect } from 'react'
import useFetchDetail from '../../hooks/use-fetch-detail'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import CardPodcastDetail from '../../components/CardPodcastDetail/CardPodcastDetail';
import PodcastListTable from '../../components/PodcastListTable/PodcastListTable';
import './PodcastDetail.css';

const PodcastDetail = () => {
  const { id } = useParams();
  const {data, isLoading, isFetching, localStorageData } = useFetchDetail(id)
  const [rawData, setRawdata] = useState({});
  useEffect(() => {
    if(!isFetching && !isLoading){
      setRawdata(data)
   }
  }, [data,isFetching, isLoading])
  
  
  const resultCount = rawData?.data?.resultCount;
  const trackName =  rawData?.data?.results[0]?.trackName;
  const artistName =  rawData?.data?.results[0]?.artistName;
  const artworkUrl600 =  rawData?.data?.results[0]?.artworkUrl600;
  const results = rawData?.data?.results;

 
  return (
    <>
      <Header isLoading={isLoading}/>
      <div className='podcastDetailContainer'>
        <div>
          <div>
            <CardPodcastDetail trackName={trackName} artistName={artistName} artworkUrl600={artworkUrl600} />
          </div>
          </div>        
          <div>
            <div className='podcastDetailTittle'>
              <h2>Episodes: {resultCount}</h2>
            </div>
            <PodcastListTable results={results} />
          </div>        
      </div>
    </>
  )
}

export default PodcastDetail