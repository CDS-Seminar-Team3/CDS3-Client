import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useGetPetitionInfo = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { petitionId } = useParams();

  const config = {
    headers: {
      'petition-id': petitionId,
    },
  };

  const getPetitionInfo = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get(`https://www.soptcds.p-e.kr/${petitionId}/detail`, config);

      setData(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPetitionInfo();
  }, []);

  return { data, isLoading, isError };
};

export default useGetPetitionInfo;
