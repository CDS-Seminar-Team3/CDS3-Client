import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';

{
  /*PageName 의 children 으로 페이지이름을 전달해 주세요!
ex) <PageName>청원 글 작성하기</PageName>
*/
}

const PageName = ({ children }) => {
  return <St.PageNameWrapper>{children}</St.PageNameWrapper>;
};

PageName.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageName;

const St = {
  PageNameWrapper: styled.div`
    margin-top: 2.4rem;
    margin-left: 1.55rem;
    margin-bottom: 0.8rem;

    ${theme.fonts.head2};
  `,
};
