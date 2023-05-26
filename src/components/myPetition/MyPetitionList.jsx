import styled from 'styled-components';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Pagination from './MyPetitionPagination';
import { useRecoilState } from 'recoil';
import { currentMyPetitionPageState } from '../../atoms/paginationAtom';

const PetitionList = ({ data, slicedData }) => {
  const listData = data ? data?.data : [];

  const [searchInput, setSearchInput] = useState('');

  //페이지네이션에 필요한 변수와 state들
  const [currentMyPetitionPage, setCurrentMyPetitionPage] = useRecoilState(
    currentMyPetitionPageState
  );
  const [searchedDataLength, setSearchedDataLength] = useState(-1);
  const [finalData, setFinalData] = useState(slicedData);
  const lengthPerPage = 10;
  const currentPage = currentMyPetitionPage;
  const startIndex = (currentPage - 1) * lengthPerPage;
  const endIndex = startIndex + lengthPerPage;

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setSearchedDataLength(-1);
    }
  };

  const sliceTitle = title => {
    if (title.length < 9) {
      return title;
    }
    return title.slice(0, 9) + '...';
  };

  const onEnterDown = e => {
    if (e.key === 'Enter') {
      const searchedData = listData?.filter(item => item.title.includes(searchInput)) || [];
      const slicedSearchedData = searchedData?.slice(startIndex, endIndex);
      setFinalData(slicedSearchedData);
      setCurrentMyPetitionPage(1);
      setSearchedDataLength(searchedData.length);
    }
  };

  useEffect(() => {
    if (!searchInput) {
      setFinalData(slicedData);
    }
  }, [searchInput, finalData]);

  useEffect(() => {
    const searchedData = listData?.filter(item => item.title.includes(searchInput)) || [];
    const slicedSearchedData = searchedData?.slice(startIndex, endIndex);
    setFinalData(slicedSearchedData);
  }, [currentMyPetitionPage]);

  return (
    <>
      <St.PetitionListWrapper>
        <St.SearchInput
          placeholder="검색어를 입력하세요"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterDown}
        ></St.SearchInput>
        <St.TableWrapper>
          <St.TableHeader>
            <St.TableCell flex="1" className="headerCell">
              번호
            </St.TableCell>
            <St.TableCell flex="2" className="headerCell">
              카테고리
            </St.TableCell>
            <St.TableCell flex="3" className="headerCell">
              제목
            </St.TableCell>
            <St.TableCell flex="1" className="headerCell" textAlign="center">
              동의
            </St.TableCell>
          </St.TableHeader>
          {listData.length === 0 ? (
            <St.EmptyList>아직 작성한 청원이 없습니다.</St.EmptyList>
          ) : searchInput === '' || finalData === undefined ? (
            slicedData?.map(item => (
              <St.TableRow key={item.petitionId}>
                <St.TableCell flex="1">{item.petitionId}</St.TableCell>
                <St.TableCell flex="2">{item.category}</St.TableCell>
                <St.TableCell flex="3">{sliceTitle(item.title)}</St.TableCell>
                <St.TableCell flex="1" textAlign="center">
                  {item.agreeNumber}
                </St.TableCell>
              </St.TableRow>
            ))
          ) : (
            finalData?.map(item => (
              <St.TableRow key={item.petitionId}>
                <St.TableCell flex="1">{item.petitionId}</St.TableCell>
                <St.TableCell flex="2">{item.category}</St.TableCell>
                <St.TableCell flex="3">{sliceTitle(item.title)}</St.TableCell>
                <St.TableCell flex="1" textAlign="center">
                  {item.agreeNumber}
                </St.TableCell>
              </St.TableRow>
            ))
          )}
        </St.TableWrapper>
      </St.PetitionListWrapper>
      <Pagination
        listLength={
          listData.length === 0
            ? 1
            : searchedDataLength === -1
            ? listData.length
            : searchedDataLength === 0
            ? 1
            : searchedDataLength
        }
      />
    </>
  );
};

PetitionList.propTypes = {
  data: PropTypes.array,
  slicedData: PropTypes.array,
};

const St = {
  PetitionListWrapper: styled.div`
    display: flex;
    flex-direction: column;

    width: 33.5rem;

    background: ${theme.colors.white};

    & > section {
      display: flex;
      flex-direction: column;

      border: 0.2rem solid ${theme.colors.gray100};
    }
  `,
  SearchInput: styled.input`
    /* width:100%; */
    height: 4.3rem;
    padding: 1.6rem 1.2rem;
    border: none;
    margin-bottom: 1rem;

    background-color: ${theme.colors.gray100};
    color: ${theme.colors.gray300};
    ${theme.fonts.body1};

    outline: none;

    &::placeholder {
      color: ${theme.colors.gray300};
    }
  `,

  TableHeader: styled.div`
    display: flex;
    align-items: center;

    padding: 1.6rem 0rem;
    height: 0.3rem;

    background-color: ${theme.colors.gray100};
    color: ${theme.colors.gray300};
    ${theme.fonts.caption2};

    & > .headerCell {
      ${theme.fonts.caption2}
    }
  `,
  TableRow: styled.div`
    display: flex;
    align-items: center;

    height: 5rem;
    border-bottom: 0.2rem solid ${theme.colors.gray100};
    &:last-child {
      border-bottom: none;
    }
  `,

  TableCell: styled.article`
    flex: ${props => props.flex || '1'};
    padding: 0.8rem;
    padding-left: 1.6rem;

    ${theme.fonts.body3};
    color: ${theme.colors.gray300};

    ${props =>
      props.textAlign &&
      `
    text-align: ${props.textAlign};
  `};
  `,
  TableWrapper: styled.section`
    height: 53.6rem;
  `,
  EmptyList: styled.div`
    margin-top: 4rem;

    ${theme.fonts.body3}
    color: ${theme.colors.gray400};

    text-align: center;
  `,
};

export default PetitionList;
