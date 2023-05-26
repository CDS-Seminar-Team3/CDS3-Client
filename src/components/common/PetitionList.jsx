import styled from 'styled-components';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { currentPetitionSelector } from '../../recoils/selector';
import { useRecoilValue, useRecoilState } from 'recoil';
import Pagination from '../CurrentPetition/CurrentPetitionPagination';
import { currentMyPetitionPageState } from '../../atoms/paginationAtom';
import { useNavigate } from 'react-router-dom';

const PetitionList = () => {
  const [searchValue, setSearchValue] = useState('');
  const defaultData = useRecoilValue(currentPetitionSelector);
  const [data, setData] = useState(defaultData);
  const [currentMyPetitionPage, setCurrentMyPetitionPage] = useRecoilState(
    currentMyPetitionPageState
  );

  const lengthPerPage = 10;
  const currentPage = currentMyPetitionPage;
  const startIndex = (currentPage - 1) * lengthPerPage;
  const endIndex = startIndex + lengthPerPage;
  const slicedSearchedData = data?.slice(startIndex, endIndex);

  const [visitedRows, setVisitedRows] = useState(
    JSON.parse(localStorage.getItem('visitedRows')) || []
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (!searchValue) {
      setData(defaultData);
    }
  }, [searchValue, data]);

  const handleSearch = e => {
    setSearchValue(e.target.value);
    setCurrentMyPetitionPage(1);
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      const filterData = defaultData.filter(item => item.title.includes(e.target.value));
      setData(filterData);
    }
  };

  const handleRowClick = id => {
    navigate(`/petitionDetail/${id}`);
    const updatedVisitedRows = [...visitedRows, id];
    setVisitedRows(updatedVisitedRows);

    localStorage.setItem('visitedRows', JSON.stringify(updatedVisitedRows));
  };
  return (
    <St.PetitionListWrapper>
      <St.SearchInput
        value={searchValue}
        placeholder="검색어를 입력하세요"
        onChange={handleSearch}
        onKeyPress={handleEnter}
      ></St.SearchInput>
      <section>
        <St.TableHeader>
          <St.TableHeaderCell flex="1">번호</St.TableHeaderCell>
          <St.TableHeaderCell flex="2">카테고리</St.TableHeaderCell>
          <St.TableHeaderCell flex="3">제목</St.TableHeaderCell>
          <St.TableHeaderCell flex="1" center="center">
            동의
          </St.TableHeaderCell>
        </St.TableHeader>

        {slicedSearchedData.map(item => (
          <St.TableRow key={item.petitionId} onClick={() => handleRowClick(item.petitionId)}>
            <St.TableCell flex="1">{item.petitionId}</St.TableCell>
            <St.TableCell flex="2">{item.category}</St.TableCell>
            <St.TableCell flex="3" visited={visitedRows.includes(item.petitionId)} title={true}>
              {item.title}
            </St.TableCell>
            <St.TableCell flex="1" center="center" display="flex" agree={item.agree}>
              {item.agreeNumber}
            </St.TableCell>
          </St.TableRow>
        ))}
      </section>
      <Pagination
        listLength={
          data.length === 0
            ? 1
            : searchValue === '' ? data.length : data.length === 0 ? 1 : data.length
        }
      />
    </St.PetitionListWrapper>
  );
};

PetitionList.propTypes = {
  data: PropTypes.array,
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

      height: 53rem;
      border: 2px solid ${theme.colors.gray100};
    }
  `,
  SearchInput: styled.input`
    /* width:100%; */
    height: 4.3rem;
    padding: 1.6rem 1.2rem;
    border: none;
    margin-bottom: 0.8rem;

    background-color: ${theme.colors.gray100};
    color: ${theme.colors.black};
    ${theme.fonts.body1};

    outline: none;

    &::placeholder {
      ${theme.fonts.body1}
      color:${theme.colors.gray300}
    }
  `,

  TableHeader: styled.div`
    display: flex;
    align-items: center;

    padding: 0 0.8rem;
    height: 3rem;

    background-color: ${theme.colors.gray100};
    color: ${theme.colors.gray300};
    ${theme.fonts.caption2};

    & > .headerCell {
    }
  `,
  TableHeaderCell: styled.article`
    display: flex;
    ${props => props.center &&
      `
 justify-content: ${props.center};

`};
    align-items: center;

    flex: ${props => props.flex || '1'};
    padding: 0.8rem;
    ${theme.fonts.caption2};
    color: ${theme.colors.gray300};
  `,
  TableRowWrapper: styled.div`
    height: 50rem;
    padding-bottom: 2rem;
  `,
  TableRow: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 0.2rem solid ${theme.colors.gray100};
    padding: 0 0.8rem;
    height: 5rem;
  `,

  TableCell: styled.article`
    ${props => (props.display ? `display: ${props.display};` : `display: block;`)}
    ${props => props.center &&
      `
 justify-content: ${props.center};
`};
    align-items: center;
    flex: ${props => props.flex || '1'};
    padding: 0.8rem;

    ${theme.fonts.body3};
    color: ${theme.colors.gray300};

    cursor: pointer;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${props => props.agree &&
      `
    color:${theme.colors.blue};
    `}

    ${props => props.title &&
      `
      ${theme.fonts.body1};
      color: ${theme.colors.black};
    `}
        ${props => props.visited &&
      `
      color: ${theme.colors.gray300};
    `}
  `,
};

export default PetitionList;
