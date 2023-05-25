import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { IcMenu, IcMore } from '../../assets/icons/0_icons';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <St.HeaderWrapper>
      <St.TitleMenu>
        <span>
          <IcMenu />
        </span>
        <span className="headerTitle">KBS 시청자 센터</span>
      </St.TitleMenu>
      <St.PageMenu>
        <span onClick={() => navigate('/main')}>청원하기</span>
        <span className="iconMore" onClick={() => setMenu(!menu)}>
          <IcMore>{menu ? 'Close' : 'Open'}</IcMore>
        </span>
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
