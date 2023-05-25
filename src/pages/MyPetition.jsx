import PetitionList from '../components/myPetition/MyPetitionList';
import { styled } from 'styled-components';
import theme from '../styles/theme';
import CreatePetitionButton from '../components/common/CreatePetitionButton';
import useGetMyPetition from '../hooks/useGetMyPetition';
import { useRecoilValue } from 'recoil';
import { currentMyPetitionPageState } from '../atoms/paginationAtom';

const MyPetition = () => {
  const { data } = useGetMyPetition();
  const petitionListData = data?.data;

  const lengthPerPage = 10;
  const currentPage = useRecoilValue(currentMyPetitionPageState);

  const startIndex = (currentPage - 1) * lengthPerPage;
  const endIndex = startIndex + lengthPerPage;
  const slicedData = petitionListData?.slice(startIndex, endIndex);


  return (
    <St.MyPetitionWrapper>
      <St.PageNameWrapper>나의 청원</St.PageNameWrapper>
      <PetitionList data={data} slicedData={slicedData} />
      <CreatePetitionButton />
    </St.MyPetitionWrapper>
  );
};

export default MyPetition;

const St = {
  MyPetitionWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  PageNameWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 33.5rem;
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;

    ${theme.fonts.head2};
  `,
};
