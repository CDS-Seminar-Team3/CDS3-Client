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
      <St.InputWrapper>
        <input type="text" value="청원에 동의합니다." readOnly />

        <button onClick={handleAgree}>동의</button>
      </St.InputWrapper>
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
  InputWrapper: styled.section`
    display: flex;
    justify-content: space-between;

    margin-top: 1.2rem;
    & > input {
      width: 27.6rem;
      height: 4rem;

      padding: 1rem 1.6rem;
      border: 0.1rem solid ${theme.colors.gray200};
      color: ${theme.colors.gray400};
    }

    & > button {
      width: 5.6rem;
      height: 4rem;
      padding: 1rem 1.6rem;

      border-radius: 0.4rem;
      border: none;

      background-color: ${theme.colors.blue};
      ${theme.fonts.body2_bold}
      color:${theme.colors.white}
    }
  `,
};
export default PetitionAgree;
