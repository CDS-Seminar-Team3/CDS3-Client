import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetCurrentPetition = () => {
  const [data, setData] = useState();

  const config = {
    headers: {
      'user-id': 1,
      'Content-Type': 'application/json',
    },
  };

  const getCurrentPetition = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/main`, config);
      console.log(
        'hook에서 받아온 데이터: ' + JSON.stringify(response.data.data.newPetitionList, null, 2)
      );
      setData(response.data.data.newPetitionList);
    } catch (e) {
      console.error(e);
    }
  };
  getCurrentPetition();

  return { data };
};

export default useGetCurrentPetition;
