import React from 'react'
import useFetchDetail from '../../hooks/use-fetch-detail'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import CardPodcastDetail from '../../components/CardPodcastDetail/CardPodcastDetail';
import PodcastListTable from '../../components/PodcastListTable/PodcastListTable';
import './PodcastDetail.css';

const PodcastDetail = () => {
  const { id } = useParams();
  const {data, isLoading } = useFetchDetail(id)
  const resultCount = data?.data?.resultCount;
  const results= data?.data?.results 
  const trackName =  data?.data?.results[0]?.trackName;
  const artistName =  data?.data?.results[0]?.artistName;
  const artworkUrl600 =  data?.data?.results[0]?.artworkUrl600;
  const trackId =  data?.data?.results[0]?.trackId;
  console.log(results)

  return (
    <>
      <Header isLoading={isLoading}/>
      <div className='podcastDetailContainer'>
        <div>
          <CardPodcastDetail trackName={trackName} artistName={artistName} artworkUrl600={artworkUrl600} trackId={trackId}/>
        </div>
        <div>
          <h2>Episodes: {resultCount}</h2>
          <PodcastListTable data={results}/>
        </div>
      </div>
    </>
  )
}

export default PodcastDetail