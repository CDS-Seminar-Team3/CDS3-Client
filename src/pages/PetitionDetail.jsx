import PetitionInfo from '../components/petitionDetail/PetitionInfo';
import PetitionContent from '../components/petitionDetail/PetitionContent';
import { styled } from 'styled-components';
import PetitionAgree from '../components/petitionDetail/PetitionAgree';
import PetitionAgreeList from '../components/petitionDetail/PetitionAgreeList';
import useGetPetitionInfo from '../hooks/useGetPetitionInfo.jsx';
import { useEffect } from 'react';

const PetitionDetail = () => {
  const { data, getPetitionInfo } = useGetPetitionInfo();
  // const { data: agreeList } = useGetAgreeList();
  // console.log("asasd"+JSON.stringify(agreeList,2,null));

  useEffect(() => {
    getPetitionInfo();
  }, [data]);

  return (
    <St.PetitionDetailWrapper>
      <PetitionInfo data={data} />
      <PetitionContent data={data?.data.content} />
      <PetitionAgree/>
      <PetitionAgreeList />
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
