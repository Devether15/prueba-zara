import React from 'react'
import useFetchDetail from '../../hooks/use-fetch-detail'
import { useParams } from 'react-router-dom';


const PodcastDetail = () => {
  const { id } = useParams();
  const data= useFetchDetail(id)
  console.log("data", data)
  return (
    <div>PodcastDetail</div>
  )
}

export default PodcastDetail