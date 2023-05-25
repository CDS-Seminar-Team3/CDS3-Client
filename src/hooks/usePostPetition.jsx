import axios from 'axios';
import { useState } from 'react';

const usePostPetition = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const config = {
    headers: {
      'user-id': 1,
    },
  };

  const postPetition = async data => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/petition`, data, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, postPetition };
};

export default usePostPetition;
