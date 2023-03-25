import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import PodcastGrid from '../../components/PodcastGrid/PodcastGrid'
import usefetch from '../../hooks/use-fetch';
import useFilter from '../../hooks/useFilter';
import URLS from '../../constants/constants';

const GeneralView = () => {
  const { initialFeedURL } = URLS;
  const { data, isLoading } = usefetch(initialFeedURL)
  const rawData = data?.data?.feed
  const [searchTerm, setSearchterm] = useState("");

  const feed = useFilter(rawData, searchTerm)
  const feedCount = feed?.length;


  return (
    <>
        <Header isLoading={isLoading}/>
        <div></div>
        <SearchBar setSearchterm={setSearchterm} feedCount={feedCount}/>
        <PodcastGrid feed={feed} />
    </>
  )
}

export default GeneralView