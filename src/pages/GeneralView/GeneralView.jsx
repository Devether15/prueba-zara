import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import PodcastGrid from '../../components/PodcastGrid/PodcastGrid'

const GeneralView = () => {
  return (
    <>
        <Header/>
        <SearchBar/>
        <PodcastGrid/>
    </>
  )
}

export default GeneralView