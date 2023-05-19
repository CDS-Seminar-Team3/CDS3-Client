import styled from 'styled-components';
import theme from '../../styles/theme';

const PetitionAgree = () => {
  const handleAgree = () => {
    alert('청원에 동의 하시겠습니까?');
  };
  return (
    <St.PetitionAgreeWrapper>
      <St.AgreeHeader>
        <h1>
          현재 <span>25 </span>명이 동참중입니다.
        </h1>
      </St.AgreeHeader>
    </St.PetitionAgreeWrapper>
  );
};
const St = {
  PetitionAgreeWrapper: styled.div`
    display: flex;
    flex-direction: column;

    width: 34.3rem;
    margin: 2.4rem 0;
  `,

  AgreeHeader: styled.header`
    display: flex;
    justify-content: start;
    align-items: start;
    & > h1 {
      ${theme.fonts.body1_bold}

      & > span {
        ${theme.fonts.body1_bold}
        color:${theme.colors.blue};
      }
    }
  `,
};
export default PetitionAgree;
