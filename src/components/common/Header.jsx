import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as IcMore } from '../../assets/icons/IcMore.svg';
import { ReactComponent as IcMenu } from '../../assets/icons/IcMenu.svg';

const Header = () => {
  return (
    <St.HeaderWrapper>
      <St.TitleMenu>
        <img>
          <IcMenu />
        </img>
        <span>KBS 시청자 센터</span>
      </St.TitleMenu>
      <St.PageMenu>
        <span>청원하기</span>
        <img>
          <IcMore />
        </img>
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

    & > img {
      width: 3.2rem;
      height: 3.2rem;
    }
    & > span {
      font-size: 1.6rem;
      font-weight: 700;
    }
  `,
  PageMenu: styled.div`
    display: flex;
    align-items: center;

    & > span {
      font-size: 1.6rem;
      font-weight: 700;
    }

    & > img {
      width: 3.2rem;
      height: 3.2rem;
    }
  `,
};
