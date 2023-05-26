import axios from 'axios';

const useGetCurrentPetition = async () => {
  const config = {
    headers: {
      'user-id': 1,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/main`, config);
    return response.data.data;
  } catch (e) {
    console.error(e);
  }
};

export default useGetCurrentPetition;
