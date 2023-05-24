import styled from 'styled-components';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Pagination from './MyPetitionPagination';
import { useRecoilState } from 'recoil';
import { currentMyPetitionPageState } from '../../atoms/paginationAtom';

const PetitionList = ({ data, slicedData }) => {
  const listData = data ? data?.data : [];

  const [searchInput, setSearchInput] = useState('');
  const [currentMyPetitionPage, setCurrentMyPetitionPage] = useRecoilState(currentMyPetitionPageState)

  const searchedData = listData?.filter(item => item.title.includes(searchInput)) || [];

  const lengthPerPage = 10;
  const currentPage = currentMyPetitionPage;

  const startIndex = (currentPage - 1) * lengthPerPage;
  const endIndex = startIndex + lengthPerPage;
  const slicedSearchedData = searchedData?.slice(startIndex, endIndex);

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
    setCurrentMyPetitionPage(1);
  };

  return (
    <>
      <St.PetitionListWrapper>
        <St.SearchInput
          placeholder="검색어를 입력하세요"
          value={searchInput}
          onChange={onChangeSearchInput}
        ></St.SearchInput>
        <section>
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
          {searchInput === ''
            ? slicedData?.map(item => (
                <St.TableRow key={item.petitionId}>
                  <St.TableCell flex="1">{item.petitionId}</St.TableCell>
                  <St.TableCell flex="2">{item.category}</St.TableCell>
                  <St.TableCell flex="3">{item.title}</St.TableCell>
                  <St.TableCell flex="1" textAlign="center">
                    {item.agreeNumber}
                  </St.TableCell>
                </St.TableRow>
              ))
            : slicedSearchedData?.map(item => (
                <St.TableRow key={item.petitionId}>
                  <St.TableCell flex="1">{item.petitionId}</St.TableCell>
                  <St.TableCell flex="2">{item.category}</St.TableCell>
                  <St.TableCell flex="3">{item.title}</St.TableCell>
                  <St.TableCell flex="1" textAlign="center">
                    {item.agreeNumber}
                  </St.TableCell>
                </St.TableRow>
              ))}
        </section>
      </St.PetitionListWrapper>
      <Pagination listLength={searchInput === '' ? listData.length : searchedData.length} />
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

      border: 2px solid ${theme.colors.gray100};
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

    border-bottom: 2px solid ${theme.colors.gray100};
    padding: 0.6rem 0rem;
    &:last-child {
      border-bottom: none;
    }
  `,

  TableCell: styled.article`
    flex: ${props => props.flex || '1'};
    padding: 0.8rem;

    ${theme.fonts.body3};
    color: ${theme.colors.gray300};

    ${props =>
      props.textAlign &&
      `
    text-align: ${props.textAlign};
  `};
  `,
};

export default PetitionList;
