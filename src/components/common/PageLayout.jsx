import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import theme from '../../styles/theme';
import DropDown from './DropDown';
import theme from '../../styles/theme';

const PageLayout = props => {
  const { children } = props;
  const [menu, setMenu] = useState(false);

  return (
    <St.PageLayoutWrapper>
      <St.PageLayoutBox>
        <Header setMenu={setMenu} />
        <DropDown className="dropDown" visibility={menu}>
          <ul>
            <li>시청자위원회</li>
            <li>KBS 문화공간</li>
            <li>시청자상담실</li>
            <li>고충처리</li>
            <li>열린채널</li>
            <li>KBS ON 견학</li>
            <li>TV 비평</li>
            <li>1020 시청자위원회</li>
            <li>청원하기</li>
          </ul>
        </DropDown>
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

    .dropDown {
      width: 37.5rem;
      height: 38.9rem;
      top: 4.2rem;
      padding: 1rem;

      background-color: ${theme.colors.white};
      color: ${theme.colors.black};

      & > ul > li {
        position: relative;
        width: 35.5rem;
        padding: 1rem;
        top: 5px;
        margin-top: 0;
        margin-bottom: 5px;
        padding-left: 0;
        list-style: none;

        ${theme.fonts.head3}
      }
    }
  `,
};
