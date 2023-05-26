import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { IcMenu, IcMore } from '../../assets/icons/0_icons';
import DropDown from './DropDown';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleNavigation = () => {
      navigate('/');
    };

    if (isClicked) {
      handleNavigation();
    }
  }, [isClicked, navigate]);

  return (
    <>
      <St.HeaderWrapper>
        <St.TitleMenu>
          <span>
            <IcMenu />
          </span>
          <span className="headerTitle">KBS 시청자 센터</span>
        </St.TitleMenu>
        <St.PageMenu>
          <span onClick={() => setIsClicked(true)}>청원하기</span>
          <span className="iconMore" onClick={() => setMenu(!menu)}>
            <IcMore />
          </span>
        </St.PageMenu>
      </St.HeaderWrapper>
      {menu && <DropDown visibility={menu} />}
    </>
  );
};

export default Header;

Header.PropTypes = {
  visibility: PropTypes.bool,
};

export const St = {
  HeaderWrapper: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 4.2rem;
    width: 37.5rem;

    z-index: 1;

    background-color: ${theme.colors.white};
    border-bottom: 0.2rem solid ${theme.colors.gray200};

    /* .dropDown {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 2;
    } */
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
