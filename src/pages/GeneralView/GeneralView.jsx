import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import PodcastGrid from '../../components/PodcastGrid/PodcastGrid'
import usefetch from '../../hooks/use-fetch'

const GeneralView = () => {
  const { data, isLoading } = usefetch()
  const feed = data?.data?.feed

  return (
    <>
        <Header isLoading={isLoading}/>
        <SearchBar/>
        <PodcastGrid feed={feed}/>
    </>
  )
}

export default GeneralView