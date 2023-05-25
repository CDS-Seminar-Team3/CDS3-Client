import styled from 'styled-components';
import theme from '../../styles/theme';
import { IcShare } from '../../assets/icons/0_icons';
import PropTypes from 'prop-types';

const PetitionContent = ({ data }) => {
  return (
    <St.PetitionContentWrapper>
      <St.ContentWrapper>
        <h3>청원내용</h3>
        <IcShare />
      </St.ContentWrapper>
      <St.PetitionContent>{data}</St.PetitionContent>
    </St.PetitionContentWrapper>
  );
};

export default PetitionContent;

PetitionContent.propTypes = {
  data: PropTypes.string,
};

const St = {
  PetitionContentWrapper: styled.div`
    width: 34.3rem;
    height: 20.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 34.3rem;
    color: ${theme.colors.gray600};

    & > h3 {
      ${theme.fonts.body1_bold}
    }
  `,
  PetitionContent: styled.p`
    width: 34.3rem;

    padding: 0.8rem 0.8rem 1.2rem 0.8rem;

    ${theme.fonts.body1}
    color:${theme.colors.gray600};

    border-top: 0.1rem solid ${theme.colors.gray400};
    border-bottom: 0.1rem solid ${theme.colors.gray400};
  `,
};
