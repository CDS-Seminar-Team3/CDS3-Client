import styled from 'styled-components';
import theme from '../styles/theme';
import PetitionList from '../components/common/PetitionList';
import PageName from '../components/common/PageName';
import { DATA } from '../constants/data';
import PetitionHeader from '../components/currentPetition/PetitionHeader';

const Main = () => {
  return (
    <>
      <PageName>이슈 청원</PageName>
      <St.MainWrapper>
        <PetitionHeader></PetitionHeader>
        <PageName button={<St.MyPetitionBtn>나의 청원</St.MyPetitionBtn>}>
          최근 청원
        </PageName>
        <PetitionList data={DATA}></PetitionList>
        {/* 페이지네이션을 추가해주세요 */}
      </St.MainWrapper>
    </>
  );
};

const St = {
  MainWrapper: styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,

  MyPetitionBtn: styled.button`
    width: 9.4rem;
    height: 3rem;
    border: 0.1rem solid ${theme.colors.blue};
    padding: 0;
    margin-left: 16.5rem;
    margin-right: 2rem;

    color: ${theme.colors.blue};
    background-color: ${theme.colors.white};
    ${theme.fonts.caption1};
  `,
};

export default Main;
