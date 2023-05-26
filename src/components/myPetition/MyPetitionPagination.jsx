import { styled } from 'styled-components';
import { IcNextPage, IcPrevPage } from '../../assets/icons/0_icons';
import theme from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { currentMyPetitionPageState } from '../../atoms/paginationAtom';
import PropTypes from 'prop-types';

const Pagination = ({ listLength }) => {
  const paginationLength = Math.ceil(listLength / 10);
  const [currentPage, setCurrentPage] = useRecoilState(currentMyPetitionPageState);
  const maxPagesNumber = 5;

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

    /* //1,2,3,4,5 -> 6,7,8,9,10 으로 넘어가는 페이지네이션
    startPage = Math.ceil(5*(Math.ceil(currentPage/5) - 1)+1);
    endPage = startPage < paginationLength / 5 ? startPage+4 : paginationLength;
    */

    // 선택한 요소가 중앙값이 되도록 하는 페이지네이션
    if (currentPage > Math.floor(maxPagesNumber / 2)) {
      startPage = currentPage - Math.floor(maxPagesNumber / 2);
      if(endPage < maxPagesNumber){
        endPage = startPage + paginationLength - 1;
      }
      else {
        endPage = startPage + maxPagesNumber - 1;
      }
      if (endPage > paginationLength) {
        endPage = paginationLength;
        startPage = endPage - maxPagesNumber + 1;
      }
    } else {
      endPage = Math.min(maxPagesNumber, paginationLength);
    }

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
