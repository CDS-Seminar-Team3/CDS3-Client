import PetitionInfo from '../components/petitionDetail/PetitionInfo';
import PetitionContent from '../components/petitionDetail/PetitionContent';
import { styled } from 'styled-components';
import PetitionAgree from '../components/petitionDetail/PetitionAgree';
import useGetPetitionInfo from '../hooks/useGetPetitionInfo.jsx';

const PetitionDetail = () => {
  const { data, isLoading, isError } = useGetPetitionInfo();
  return (
    <St.PetitionDetailWrapper>
      <PetitionInfo data={data} />
      <PetitionContent data={data?.data.content} />
      <PetitionAgree />
    </St.PetitionDetailWrapper>
  );
};

export default PetitionDetail;

const St = {
  PetitionDetailWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
