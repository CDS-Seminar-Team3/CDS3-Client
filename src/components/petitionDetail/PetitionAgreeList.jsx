import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import useGetAgreeList from '../../hooks/useGetAgreeList';
import { IcNextPage2, IcPrevPage2 } from '../../assets/icons/0_icons';
import { detailAgreedListPageState } from '../../atoms/paginationAtom';
import { useRecoilState } from 'recoil';
import { agreeListState } from '../../atoms/agreePetitionAtom';

const PetitionAgreeList = () => {
  const { data, getAgreeList } = useGetAgreeList();

  useEffect(() => {
    getAgreeList();
  }, [data]);

  const [currentPage, setCurrentPage] = useRecoilState(detailAgreedListPageState);
  const agreeList = data ? data?.agreeList : [];
  const paginationLength = Math.ceil(agreeList.length / 5);
  const lengthPerPage = 5;
  const maxPagesNumber = 5;

  const startIndex = (currentPage - 1) * lengthPerPage;
  const endIndex = startIndex + lengthPerPage;
  const slicedData = agreeList ? agreeList?.slice(startIndex, endIndex) : [];

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
      if (endPage < maxPagesNumber) {
        endPage = startPage + paginationLength - 1;
      } else {
        endPage = startPage + maxPagesNumber - 1;
      }
      if (endPage > paginationLength) {
        endPage = paginationLength;
        startPage = endPage - paginationLength + 1;
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
    <St.PetitionAgreeListWrapper>
      <St.PetitionAgreeList>
        {slicedData?.map(item => {
          return (
            <St.TableCell key={item.id}>
              <St.UserName>{item.userName}</St.UserName>
              <St.AgreeContent>{item.agreeContent}</St.AgreeContent>
            </St.TableCell>
          );
        })}
      </St.PetitionAgreeList>
      <St.Pagination>
        <IcPrevPage2 onClick={onClickPrevPage} className="icPrevPage" />
        <St.PagesWrapper>{renderPageNumbers()}</St.PagesWrapper>
        <IcNextPage2 onClick={onClickNextPage} className="icNextPage" />
      </St.Pagination>
    </St.PetitionAgreeListWrapper>
  );
};

export default PetitionAgreeList;

const St = {
  PetitionAgreeListWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;

    width: 33.5rem;
    height: 24rem;
    margin-bottom: 4.8rem;
    padding-top: 0.8rem;

    background: ${theme.colors.gray100};
  `,
  UserName: styled.span`
    width: 5.6rem;
    height: 2rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    margin-right: 0.8rem;

    ${theme.fonts.body2_bold}
  `,
  AgreeContent: styled.span`
    width: 24.6rem;

    ${theme.fonts.body2}
    color: ${theme.colors.gray400};
  `,
  TableCell: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 31.9rem;
    height: 3.6rem;
    border-bottom: 0.1rem solid ${theme.colors.gray300};
  `,
  Pagination: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 2.4rem;
    margin-bottom: 1.4rem;

    & > .icPrevPage {
      margin-left: 0.8rem;

      cursor: pointer;
    }

    & > .icNextPage {
      margin-right: 0.8rem;

      cursor: pointer;
    }
  `,
  PageNumberWrapper: styled.div`
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;

    background: ${theme.colors.white};

    text-align: center;

    ${theme.fonts.body1}
    color: ${props => (props.isCurrent ? theme.colors.blue : theme.colors.gray400)};
    border: ${props =>
      props.isCurrent
        ? `0.1rem solid ${theme.colors.blue}`
        : `0.1rem solid ${theme.colors.gray400}`};

    cursor: pointer;
  `,
  PagesWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  PetitionAgreeList: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
};
