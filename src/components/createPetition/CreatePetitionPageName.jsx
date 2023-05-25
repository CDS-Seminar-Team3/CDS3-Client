import { styled } from 'styled-components';
import theme from '../../styles/theme';

const CreatePetitionPageName = () => {
  return <St.PageNameWrapper>청원 글 작성하기</St.PageNameWrapper>;
};

export default CreatePetitionPageName;

const St = {
  PageNameWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 33.5rem;
    margin-top: 2.4rem;
    margin-left: 2rem;
    margin-bottom: 0.8rem;

    ${theme.fonts.head2};
  `,
};
