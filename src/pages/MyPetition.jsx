import PetitionList from '../components/common/PetitionList';
import { DATA } from '../constants/data';
import { styled } from 'styled-components';
import theme from '../styles/theme';
import Pagination from '../components/common/Pagination';
import CreatePetitionButton from '../components/common/CreatePetitionButton';
import useGetMyPetition from '../hooks/useGetMyPetition';
import { useRecoilValue } from 'recoil';
import { currentMyPetitionPageState } from '../atoms/paginationAtom';


const MyPetition = () => {
  const { data, isLoading, isError } = useGetMyPetition();

  //page 하나에서 보여주는 요소의 개수
  const lengthPerPage = 10;
  const currentPage = useRecoilValue(currentMyPetitionPageState); // 현재 페이지 상태 가져오기

  const startIndex = (currentPage - 1) * lengthPerPage; // 시작 인덱스 계산
  const endIndex = startIndex + lengthPerPage; // 종료 인덱스 계산
  const slicedData = DATA.slice(startIndex, endIndex); // 배열 자르기

  return (
    <St.MyPetitionWrapper>
      <St.PageNameWrapper>나의 청원</St.PageNameWrapper>
      <PetitionList data={slicedData} />
      <Pagination />
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
