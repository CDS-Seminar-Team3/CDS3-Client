import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';

const CreatePetitionButton = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/createPetition');
  }

  return <St.CreatePetitionButtonWrapper onClick={onClickButton}>청원하기</St.CreatePetitionButtonWrapper>;
};

export default CreatePetitionButton;

const St = {
  CreatePetitionButtonWrapper: styled.button`
    width: 33.5rem;
    height: 4.3rem;
    margin-bottom: 6.4rem;

    ${theme.fonts.body3_bold}
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    border: none;

    text-align: center;
  `,
};
