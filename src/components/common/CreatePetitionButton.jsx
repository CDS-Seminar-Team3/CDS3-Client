import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';

const CreatePetitionButton = () => {
  return <St.CreatePetitionButtonWrapper>청원하기</St.CreatePetitionButtonWrapper>;
};

export default CreatePetitionButton;

const St = {
  CreatePetitionButtonWrapper: styled.button`
    width: 33.5rem;
    height: 4.3rem;
    margin-bottom: 6.4rem;

    ${theme.fonts}
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    border: none;

    text-align: center;
  `,
};
