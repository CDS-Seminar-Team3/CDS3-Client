import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as IcMore } from '../../assets/icons/IcMore.svg';
import { ReactComponent as IcMenu } from '../../assets/icons/IcMenu.svg';
import keyframes from 'styled-components';
import DropDown from './DropDown';

const Header = () => {
  const [menu, setMenu] = useState(false);

  @keyframes slide-fade-in {
    0% {
      transform: translateY(-100%);
    }
  
    100% {
      transform: translateY(0);
    }
  }
  
  .slide-fade-in-dropdown {
    overflow: hidden;
  }
  
  .slide-fade-in-dropdown > ul {
    animation: slide-fade-in-dropdown-animation .4s ease;
  }
  
  /* fade out */
  
  @keyframes slide-fade-out {
    0% {
      transform: translateY(0);
    }
  
    100% {
      transform: translateY(-100%);
    }
  }
  
  .slide-fade-out-dropdown {
    overflow: hidden;
  }
  
  .slide-fade-out-dropdown > ul {
    animation: slide-fade-out-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
  }

  return (
    <St.HeaderWrapper>
      <St.TitleMenu>
        <span>
          <IcMenu />
        </span>
        <span className="headerTitle">KBS 시청자 센터</span>
      </St.TitleMenu>
      <St.PageMenu>
        <span>청원하기</span>
        <span className="iconMore">
          <IcMore onClick={ e => setMenu(!menu)}>
            {menu ? 'Close' : 'Open'}
            </IcMore>
        </span>
        <DropDown visibility = {menu}>
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
      </St.PageMenu>
    </St.HeaderWrapper>
  );
};

export default Header;

export const St = {
  HeaderWrapper: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 4.2rem;
    width: 37.5rem;

    background-color: ${theme.colors.white};
    border-bottom: 0.2rem solid ${theme.colors.gray200};
  `,
  TitleMenu: styled.div`
    margin: 0.5rem 1.2rem 0.5rem 0.8rem;
    display: flex;
    align-items: center;

    & > .headerTitle {
      ${theme.fonts.head3}
    }
  `,
  PageMenu: styled.div`
    display: flex;
    align-items: center;
    & > span {
      ${theme.fonts.head3}

      cursor: pointer;
    }

    & > .iconMore {
      cursor: pointer;
    }
  `,
};
