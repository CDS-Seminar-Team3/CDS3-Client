import React from 'react';
import { styled } from 'styled-components';
import { IcNextPage, IcPrevPage } from '../../assets/icons/0_icons';
import theme from '../../styles/theme';
import { DATA } from '../../constants/data';
import { useRecoilState } from 'recoil';
import { currentMyPetitionPageState } from '../../atoms/paginationAtom';

const Pagination = () => {
  const paginationLength = Math.ceil(DATA.length / 10);
  const [currentPage, setCurrentPage] = useRecoilState(currentMyPetitionPageState);
  console.log(currentPage);
  const onClickPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNextPage = () => {
    if (currentPage < paginationLength) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <St.PaginationWrapper>
      <IcPrevPage className="icPrevPage" onClick={onClickPrevPage} />
      {[...Array(paginationLength)].map((_, index) => {
        return <span key={index}>{index + 1}</span>;
      })}
      <IcNextPage className="icNextPage" onClick={onClickNextPage} />
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
      
      cursor: pointer;
    }

    & > .icNextPage {
      margin-left: 2.3rem;

      cursor: pointer;
    }

    & > span {
      margin-left: 1.6rem;
      margin-right: 1.6rem;

      ${theme.fonts.body1}
    }
  `,
};
