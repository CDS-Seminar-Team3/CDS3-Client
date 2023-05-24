import styled from 'styled-components';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';

const PetitionList = ({ data }) => {
  console.log(data?.data);
  const listData = data?.data;
  return (
    <St.PetitionListWrapper>
      <St.SearchInput placeholder="검색어를 입력하세요"></St.SearchInput>
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
        {listData?.map(item => (
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
      ${theme.colors.gray300}
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
