import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';

{
  /*PageName 의 children 으로 페이지이름을 전달해 주세요!
ex) <PageName>청원 글 작성하기</PageName>
button 이 있는 경우는 props 로 button 컴포넌트를 만들어 전달해 주세요!
ex) <PageName button={<Button />}>최근 청원</PageName>
*/
}

const PageName = ({ children, button }) => {
  return <St.PageNameWrapper>{children}{button}</St.PageNameWrapper>;
};

PageName.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.node, // button 은 isRequired 를 제외함으로써 선택적으로
};

export default PageName;

const St = {
  PageNameWrapper: styled.div`
    margin-top: 2.4rem;
    /* margin-left: 1.55rem; */ //적용해보니 없어야 디자인이 맞는것 같아서 주석처리 했어요!
    margin-bottom: 0.8rem;

    ${theme.fonts.head2};
  `,
};
