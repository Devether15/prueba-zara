import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import PodcastGrid from '../../components/PodcastGrid/PodcastGrid'
import usefetch from '../../hooks/use-fetch'

const GeneralView = () => {
    const { feed } = usefetch()
    console.log(feed)
  return (
    <>
        <Header/>
        <SearchBar/>
        <PodcastGrid/>
    </>
  )
}

export default GeneralView