import axios from 'axios';
import { useParams } from 'react-router-dom';

const usePostAgree = () => {
  const { petitionId } = useParams();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'user-id': 1,
    },
  };

  const postAgree = async agreeContent => {
    console.log(agreeContent);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/${petitionId}/detail/agree`,
        agreeContent,
        config
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return { postAgree };
};

export default usePostAgree;
