import React from 'react';
import { styled } from 'styled-components';
import { IcNextPage, IcPrevPage } from '../../assets/icons/0_icons';
import theme from '../../styles/theme';

const Pagination = () => {
  return (
    <St.PaginationWrapper>
      <IcPrevPage className="icPrevPage" />
      <span>1</span>
      <IcNextPage className="icNextPage" />
    </St.PaginationWrapper>
  );
};

export default Pagination;

const St = {
  PaginationWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.4rem;
    margin-bottom: 1.6rem;
    width: 33.2rem;
    height: 4.4rem;

    & > .icPrevPage {
      margin-right: 2.3rem;
    }

    & > .icNextPage {
      margin-left: 2.3rem;
    }

    & > span {
      margin-left: 1.6rem;
      margin-right: 1.6rem;

      ${theme.fonts.body1}
    }
  `,
};
