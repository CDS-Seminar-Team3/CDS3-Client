import styled from 'styled-components';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { currentPetitionSelector } from '../../recoils/selector';
import { useRecoilValue } from 'recoil';

const PetitionList = () => {
  const [searchValue, setSearchValue] = useState('');
  const defaultData = useRecoilValue(currentPetitionSelector);
  const [data, setData] = useState(defaultData);
  useEffect(() => {
    if (!searchValue) {
      setData(defaultData);
    }
  }, [searchValue, data]);

  const handleSearch = e => {
    setSearchValue(e.target.value);
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      const filterData = defaultData.filter(item => item.title.includes(e.target.value));
      setData(filterData);
    }
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

        {data.map(item => (
          <St.TableRow key={item.petitionId}>
            <St.TableCell flex="1">{item.petitionId}</St.TableCell>
            <St.TableCell flex="2">{item.category}</St.TableCell>
            <St.TableCell flex="3">{item.title}</St.TableCell>
            <St.TableCell flex="1" center="center" display="flex">
              {item.agreeNumber}
            </St.TableCell>
          </St.TableRow>
        ))}
      </section>
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
    color: ${theme.colors.gray300};
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
    display: block;

    ${props =>
      props.display &&
      `
    display: ${props.display};
  `}
    align-items: center;
    flex: ${props => props.flex || '1'};
    padding: 0.8rem;

    ${theme.fonts.body3};
    color: ${theme.colors.gray300};

    ${props =>
      props.center &&
      `
 justify-content: ${props.center};
`};
    cursor: pointer;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

export default PetitionList;
