import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  categoryState,
  titleState,
  contentState,
  checkCautionState,
  isRegisterState,
} from '../../atoms/registerPetitionAtom';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';
import usePostPetition from '../../hooks/usePostPetition';

const PetitionButtons = ({data}) => {
  const [isRegister, setIsRegister] = useRecoilState(isRegisterState);
  const category = useRecoilValue(categoryState);
  const title = useRecoilValue(titleState);
  const content = useRecoilValue(contentState);
  const checkCaution = useRecoilValue(checkCautionState);
  const { isLoading, isError, postPetition} = usePostPetition();

  useEffect(() => {
    if (category !== '카테고리를 선택해주세요.' && title !== '' && content !== '' && checkCaution) {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [category, title, content, checkCaution]);

  const onClickRegister = () => {
    postPetition(data);
  }

  return (
    <St.PetitionButtonsWrapper isRegister={isRegister}>
      <button className="cancelButton">취소</button>
      <button className="registerButton" onClick={onClickRegister}>등록</button>
    </St.PetitionButtonsWrapper>
  );
};

export default PetitionButtons;

PetitionButtons.propTypes = {
  data: PropTypes.node,
};

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

      opacity: ${props => (props.isRegister ? 1 : 0.3)};
    }
  `,
};
