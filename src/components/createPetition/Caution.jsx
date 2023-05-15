import styled from 'styled-components';
import theme from '../../styles/theme';

const Caution = () => {
  return (
    <St.CautionWrapper>
      <St.Caution>
      </St.Caution>
    </St.CautionWrapper>
  );
};

export default Caution;

const St = {
  CautionWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  Caution: styled.div`
    width: 34.2rem;
    height: 43.3rem;
    border-radius: 0.4rem;

    background-color: ${theme.colors.gray100};
  `,
};
