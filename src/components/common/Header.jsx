import { useState, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModalContent from './ModalContent';

import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { IcMenu, IcMore } from '../../assets/icons/0_icons';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMoreClick = () => {
    setMenu(true);
  };

  const handleCloseModal = () => {
    setMenu(false);
  };

  const onClickDoPetition = () => {
    startTransition(() => {
      navigate('/');
    });
  };

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
          <span onClick={onClickDoPetition}>청원하기</span>
          <span className="iconMore" onClick={handleMoreClick}>
            <IcMore />
          </span>
        </St.PageMenu>
      </St.HeaderWrapper>
      {menu && <ModalContent onClose={handleCloseModal} />}
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
      display: flex;
      align-items: center;

      cursor: pointer;
    }
  `,
};
