import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import PodcastGrid from '../../components/PodcastGrid/PodcastGrid'
import usefetch from '../../hooks/use-fetch';
import URLS from '../../constants/constants';

const GeneralView = () => {
  const { initialFeedURL } = URLS;
  const { data, isLoading } = usefetch(initialFeedURL)
  const feed = data?.data?.feed
  const [searchTerm, setSearchterm] = useState("");

  return (
    <>
        <Header isLoading={isLoading}/>
        <SearchBar setSearchterm={setSearchterm} />
        <PodcastGrid feed={feed} searchTerm={searchTerm}/>
    </>
  )
}

export default GeneralView