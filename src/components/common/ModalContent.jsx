import React from 'react';
import ModalPortal from './ModalPortal';
import { styled } from 'styled-components';
import theme from '../../styles/theme';

import { IcBlueDot } from '../../assets/icons/0_icons';

const ModalContent = ({ onClose }) => {
  return (
    <ModalPortal>
      <St.Background onClick={onClose}>
        <St.DropDown className="dropdown">
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
        </St.DropDown>
      </St.Background>
    </ModalPortal>
  );
};

export default ModalContent;

export const St = {
  Background: styled.div`
    z-index: 999;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    background-color: ${theme.colors.gray900};
  `,
  DropDown: styled.article`
    position: relative;
    width: 37.5rem;
    height: 38.9rem;

    top: -14.7rem;
    left: 0;
    padding: 1rem;

    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    z-index: 1;

    ul {
      width: 100%;
      height: 36.9rem;

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
  `,
};
