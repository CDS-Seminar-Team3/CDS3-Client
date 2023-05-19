import styled from 'styled-components';
import theme from '../styles/theme';
import PetitionList from '../components/common/PetitionList';
import PageName from '../components/common/PageName';
import { DATA } from '../constants/data';
import PetitionHeader from '../components/currentPetition/PetitionHeader';

const Main = () => {
  return (
    <St.MainWrapper>
      <PageName>이슈 청원</PageName>
      <PetitionHeader></PetitionHeader>
      <PageName>
        최근 청원 <St.MyPetitionBtn>나의 청원</St.MyPetitionBtn>
      </PageName>
      <PetitionList data={DATA}></PetitionList>
      {/* 페이지네이션을 추가해주세요 */}
    </St.MainWrapper>
  );
};

const St = {
  MainWrapper: styled.main`
    height: 100vh;
    width: 37.5rem;
    padding: 2rem;

    background: ${theme.colors.white};
  `,

  MyPetitionBtn: styled.button`
    width: 9.4rem;
    height: 3rem;
    border: 1px solid ${theme.colors.blue};

    color: ${theme.colors.blue};
    background-color: ${theme.colors.white};
    ${theme.fonts.caption1};
  `,
};

export default Main;
