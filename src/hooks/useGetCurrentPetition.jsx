import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetCurrentPetition = async () => {
  const config = {
    headers: {
      'user-id': 1,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/main`, config);
    console.log(
      'hook에서 받아온 데이터: ' + JSON.stringify(response.data.data.newPetitionList, null, 2)
    );
    return response.data.data.newPetitionList;
    //   setData(JSON.stringify(response.data.data.newPetitionList));
  } catch (e) {
    console.error(e);
  }

  //   console.log(response.data.data.newPetitionList + '마지막확인');
};

export default useGetCurrentPetition;
