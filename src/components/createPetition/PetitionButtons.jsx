import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';

const PetitionButtons = () => {
  return (
    <St.PetitionButtonsWrapper>
      <button className="cancelButton">취소</button>
      <button className="registerButton">등록</button>
    </St.PetitionButtonsWrapper>
  );
};

export default PetitionButtons;

const St = {
  PetitionButtonsWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8rem;


    padding-top: 0.8rem;

    & > button {
      height: 4.5rem;
      ${theme.fonts.body1_bold}
    }
    & > .cancelButton {
      width: 16.3rem;
      border: 0.1rem solid ${theme.colors.blue};
      margin-right: 0.8rem;

      background: ${theme.colors.white};
      color: ${theme.colors.blue};
    }

    & > .registerButton {
      width: 16.4rem;
      border: none;

      color: ${theme.colors.white};
      background: ${theme.colors.blue};

      opacity: 0.3;
    }
  `,
};
