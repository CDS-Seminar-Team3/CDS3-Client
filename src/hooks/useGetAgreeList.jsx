import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useGetAgreeList = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { petitionId } = useParams();

  const config = {
    headers: {
      'petition-id': petitionId,
    },
  };

  const getAgreeList = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/petitions/${petitionId}/agree`, config);
      setData(response.data);
      console.log(response);
    } catch (e) {
      setIsError(true);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAgreeList();
  }, []);

  return { data, isLoading, isError };
};

export default useGetAgreeList;
