import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import PodcastGrid from '../../components/PodcastGrid/PodcastGrid'
import usefetch from '../../hooks/use-fetch'

const GeneralView = () => {
  const { data, isLoading } = usefetch()
  const feed = data?.data?.feed
  const [searchTerm, setSearchterm] = useState("");
console.log(searchTerm)
  return (
    <>
        <Header isLoading={isLoading}/>
        <SearchBar setSearchterm={setSearchterm} />
        <PodcastGrid feed={feed} searchTerm={searchTerm}/>
    </>
  )
}

export default GeneralView