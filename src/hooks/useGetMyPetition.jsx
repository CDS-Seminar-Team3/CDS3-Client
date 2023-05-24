import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetMyPetition = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const config = {
    headers: {
      'user-id': 1,
    },
  };

  const getMyPetition = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/mypetition`, config);
      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMyPetition();
  }, []);

  return { data, isLoading, isError };
};

export default useGetMyPetition;
