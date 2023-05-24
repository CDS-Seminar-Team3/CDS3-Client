import PetitionInfo from '../components/petitionDetail/PetitionInfo';
import PetitionContent from '../components/petitionDetail/PetitionContent';
import { styled } from 'styled-components';
import PetitionAgree from '../components/petitionDetail/PetitionAgree';

const PetitionDetail = () => {
  return (
    <St.PetitionDetailWrapper>
      <PetitionInfo />
      <PetitionContent />
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
