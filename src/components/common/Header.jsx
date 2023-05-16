import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as IcMore } from '../../assets/icons/IcMore.svg';
import { ReactComponent as IcMenu } from '../../assets/icons/IcMenu.svg';

const Header = () => {
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
          <IcMore />
        </span>
      </St.PageMenu>
    </St.HeaderWrapper>
  );
};

export default Header;

export const St = {
  HeaderWrapper: styled.header`
    height: 4.2rem;
    width: 37.5rem;

    background-color: ${({ theme }) => theme.colors.white};
  `,
  TitleMenu: styled.div`
    display: flex;
    align-items: center;

    & > span {
      width: 3.2rem;
      height: 3.2rem;
    }
    & > .headerTitle {
      ${theme.fonts.head3}
    }
  `,
  PageMenu: styled.div`
    display: flex;
    align-items: center;

    & > span {
      ${theme.fonts.head3}
    }

    & > .iconMore {
      width: 3.2rem;
      height: 3.2rem;
    }
  `,
};
