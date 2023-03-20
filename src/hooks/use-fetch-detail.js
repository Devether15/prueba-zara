import { useQuery } from 'react-query'
import axios from 'axios';
import URLS from '../constants/constants';

function useFetchDetail (podcastId) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { podcastDetailURLBase, podcastDetailURLParams } = URLS;
  const endpoint = `${podcastDetailURLBase}${podcastId}${podcastDetailURLParams}`;
  const { data, isLoading, isFetching } = useQuery(
    ['podcast detail'],
    () => axios.get(endpoint)
  )
  
  return {
    isLoading,
    isFetching,
    data,
  }
}

export default useFetchDetail;
