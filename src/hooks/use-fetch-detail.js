import { useState, useEffect } from "react";
import { useQuery } from 'react-query'
import axios from 'axios';
import URLS from '../constants/constants';

function useFetchDetail (podcastId) {
  const [localStorageData, setLocalStorageData] = useState(null);
  const { podcastDetailURLBase, podcastDetailURLParams } = URLS;
  const endpoint = `${podcastDetailURLBase}${podcastId}${podcastDetailURLParams}`;
  const { data, isLoading, isFetching } = useQuery(
    ['podcast detail'],
    () => axios.get(`https://api.allorigins.win/raw?url=${endpoint}`)
  )  

  useEffect(() => {
    const lastRequestTime = localStorage.getItem("lastRequestTime");
    const now = new Date().getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (!lastRequestTime || now - lastRequestTime > oneDayInMilliseconds) {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => {
          setLocalStorageData(data);
          localStorage.setItem("lastRequestTime", now);
        })
        .catch((error) => console.error(error));
    }
  }, [endpoint]);
 
  return {
    isLoading,
    isFetching,
    data,
  }
}

export default useFetchDetail;
