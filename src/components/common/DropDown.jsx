import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import { IcBlueDot } from '../../assets/icons/0_icons';

const DropDown = props => {
  const [animation, setAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setAnimation(false);
        }, 400)
      );
    }
  }, [props.visibility]);

  return (
    <St.DropDown
      className={`dropdown ${props.visibility ? 'fade-in-dropdown' : 'fade-out-dropdown'}`}
    >
      {props.visibility && (
        <ul>
          <li>시청자위원회</li>
          <li>KBS 문화공간</li>
          <li>시청자상담실</li>
          <li>고충처리</li>
          <li>열린채널</li>
          <li>KBS ON 견학</li>
          <li>TV 비평</li>
          <li>1020 시청자위원회</li>
          <li>
            <IcBlueDot />
            청원하기
          </li>
        </ul>
      )}
    </St.DropDown>
  );
};

export default DropDown;

DropDown.propTypes = {
  visibility: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const St = {
  DropDown: styled.article`
    width: 100%;
    height: 38.9rem;

    top: 4.2rem;
    left: 0;
    padding: 1rem;

    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    z-index: 1;

    ul {
      width: 100%;
      height: 38.9rem;

      top: 4.2rem;
      left: 0;

      background-color: ${theme.colors.white};
      z-index: 2;

      li {
        width: 35.5rem;
        height: 4.1rem;

        top: 4.2rem;
        left: 0;
        padding: 1rem;
        text-align: end;

        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
        z-index: 3;

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

    @keyframes fade-in-dropdown-animation {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(0);
      }
    }

    .fade-in-dropdown {
      overflow: hidden;
    }

    .fade-in-dropdown > ul {
      animation: fade-in-dropdown-animation 0.4s ease;
    }

    @keyframes fade-out-dropdown-animation {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(-100%);
      }
    }

    .fade-out-dropdown {
      overflow: hidden;
    }

    .fade-out-dropdown > ul {
      animation: fade-out-dropdown-animation 0.4s ease;
      animation-fill-mode: forwards;
    }

    .dropdown {
      position: relative;
      width: 37.5rem;
      height: 38.9rem;
      padding: 1rem;
      top: 5px;
      left: 0;

      margin-top: 0;
      margin-bottom: 5px;
      padding-left: 0;
      list-style: none;

      ${theme.fonts.head3}
    }
  `,
};
