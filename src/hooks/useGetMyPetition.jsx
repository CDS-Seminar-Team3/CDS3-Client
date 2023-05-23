import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetMyPetition = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getMyPetition = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get(`https://13.125.247.147:8080/mypetition`);
      setData(response.data);
      console.log(response);
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
