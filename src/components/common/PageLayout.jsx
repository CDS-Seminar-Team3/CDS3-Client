import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import theme from '../../styles/theme';

const PageLayout = props => {
  const { children } = props;
  return (
    <St.PageLayoutWrapper>
      <St.PageLayoutBox>
        <Header />
        {children}
        <Footer />
      </St.PageLayoutBox>
    </St.PageLayoutWrapper>
  );
};
/*
이거 propTypes 명시 안 해주니까 에러 나더라구요..
그래서 prop-types 패키지
install 하고 타입 명시해 주었습니다~
*/
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;

{
  /*전체 화면을 가운데 정렬하기 위해 PageLayout에 Wrapper,Box를 제작*/
}
const St = {
  PageLayoutWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  PageLayoutBox: styled.div`
    width: 37.5rem;
    background-color: ${theme.colors.white};
  `,
};
