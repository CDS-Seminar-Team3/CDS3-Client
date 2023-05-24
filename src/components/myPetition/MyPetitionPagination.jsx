import React from 'react';
import { styled } from 'styled-components';
import { IcNextPage, IcPrevPage } from '../../assets/icons/0_icons';
import theme from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { currentMyPetitionPageState } from '../../atoms/paginationAtom';
import PropTypes from 'prop-types';

const Pagination = ({ listLength }) => {
  const paginationLength = Math.ceil(listLength / 10);
  const [currentPage, setCurrentPage] = useRecoilState(currentMyPetitionPageState);

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

  const onClickPageNumber = index => {
    setCurrentPage(index + 1);
  };

  const renderPageNumbers = () => {
    let startPage = 1;
    let endPage = paginationLength;

    startPage = Math.ceil(5*(Math.ceil(currentPage/5) - 1)+1);
    endPage = startPage < paginationLength / 5 ? startPage+4 : paginationLength;

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <St.PageNumberWrapper
          key={i}
          isCurrent={i === currentPage}
          onClick={() => onClickPageNumber(i - 1)}
        >
          {i}
        </St.PageNumberWrapper>
      );
    }
    return pages;
  };

  return (
    <St.PaginationWrapper>
      <IcPrevPage className="icPrevPage" onClick={onClickPrevPage} />
      {renderPageNumbers()}
      <IcNextPage className="icNextPage" onClick={onClickNextPage} />
    </St.PaginationWrapper>
  );
};

export default Pagination;


Pagination.propTypes = {
  listLength: PropTypes.number,
};

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
  `,
  PageNumberWrapper: styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;

    ${theme.fonts.body1}
    color: ${props => (props.isCurrent ? theme.colors.black : theme.colors.gray300)};

    cursor: pointer;
  `,
};
