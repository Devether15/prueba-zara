import { useQuery } from 'react-query'
import axios from 'axios';

function useFetchDetail (podcastId) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useQuery(
    ['podcast detail'],
    () => axios.get(`https://itunes.apple.com/lookup?id=${podcastId}`)
  )

  return {
    isLoading,
    data,
  }
}

export default useFetchDetail;
