import { useState, startTransition } from 'react';
import ModalPortal from './ModalPortal';
import { styled, keyframes, css } from 'styled-components';
import theme from '../../styles/theme';
import { IcBlueDot, IcMenu, IcMore } from '../../assets/icons/0_icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ModalContent = ({ onClose }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationEnd = () => {
    if (!isVisible) {
      onClose();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const onClickIcon = () => {
    startTransition(() => {
      navigate('/');
      handleClose();
    });
  };

  return (
    <ModalPortal>
      <St.HeaderTotalWrapper>
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
              <IcMore onClick={handleClose} />
            </span>
          </St.PageMenu>
        </St.HeaderWrapper>
        <St.DropDown className="dropdown" isVisible={isVisible} onAnimationEnd={handleAnimationEnd}>
          <ul>
            <li>시청자위원회</li>
            <li>KBS 문화공간</li>
            <li>시청자상담실</li>
            <li>고충처리</li>
            <li>열린채널</li>
            <li>KBS ON 견학</li>
            <li>TV 비평</li>
            <li>1020 시청자위원회</li>
            <St.DoPetition onClick={onClickIcon}>
              <IcBlueDot />
              청원하기
            </St.DoPetition>
          </ul>
        </St.DropDown>
      </St.HeaderTotalWrapper>
      <St.Background onClick={handleClose}></St.Background>
    </ModalPortal>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.node.isRequired,
};

export default ModalContent;

export const St = {
  HeaderTotalWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;

    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 37.5rem;
  `,
  Background: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    background-color: ${theme.colors.gray900};
  `,
  DropDown: styled.article`
    width: 37.5rem;
    height: 38.9rem;

    padding: 1rem;

    background-color: ${theme.colors.white};
    color: ${theme.colors.black};

    ul {
      width: 100%;
      height: 36.9rem;

      background-color: ${theme.colors.white};

      li {
        width: 35.5rem;
        height: 4.1rem;

        padding: 1rem;
        text-align: end;

        background-color: ${theme.colors.white};
        color: ${theme.colors.black};

        ${theme.fonts.head3}
        font-weight: 400;

        svg {
          margin-right: 1rem;
        }
      }

      li:last-of-type {
        ${theme.fonts.head3}
      }
    }

    animation: ${props => props.isVisible ? css`
            ${slideDown} 0.3s ease-out forwards
          ` : css`
            ${slideUp} 0.3s ease-out forwards
          `};
  `,
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
    }
  `,
  DoPetition: styled.li`
    cursor: pointer;
  `,
};

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;
