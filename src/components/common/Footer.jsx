import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as IcArrowDown } from '../../assets/icons/IcArrowDown.svg';
import { ReactComponent as IcFacebook } from '../../assets/icons/IcFacebook.svg';
import { ReactComponent as IcInstagram } from '../../assets/icons/IcInstagram.svg';
import { ReactComponent as IcTwitter } from '../../assets/icons/IcTwitter.svg';
import { ReactComponent as IcYoutube } from '../../assets/icons/IcYoutube.svg';

const Footer = () => {
  return (
    <St.FooterWrapper>
      <St.FooterDownload>
        <span>
          <b>KBS 애플리케이션</b> 다운로드
        </span>
        <span className="icArrowDown">
          <IcArrowDown />
        </span>
      </St.FooterDownload>
      <St.FooterSocialNetwork>
        <IcFacebook />
        <IcYoutube />
        <IcInstagram />
        <IcTwitter />
      </St.FooterSocialNetwork>
      <St.FooterMenuTop>
        <span>KBS 소개</span>
        <span>채용</span>
        <span>사업자정보</span>
        <span>개인정보처리방침</span>
        <span>이용약관</span>
      </St.FooterMenuTop>
      <St.FooterMenuBottom>
        <span>시청자센터</span>
        <span>FAQ</span>
        <span>웹 접근성 안내</span>
      </St.FooterMenuBottom>
      <span className="footerCopyright">
        <b>KBS</b> ALL rights reserved
      </span>
    </St.FooterWrapper>
  );
};

export default Footer;

export const St = {
  FooterWrapper: styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 28.3rem;
    width: 37.5rem;

    background-color: ${theme.colors.white};
    color: ${theme.colors.gray400};

    & > .footerCopyright {
      margin-bottom: 3.2rem;

      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 150%;
      letter-spacing: -0.06rem;
    }
  `,
  FooterDownload: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 5.6rem;
    width: 37.5rem;

    border-top: 0.1rem solid ${theme.colors.gray400};
    border-bottom: 0.1rem solid ${theme.colors.gray400};

    color: ${theme.colors.gray600};

    & > span {
      ${theme.fonts.body3}
      margin-left: 2.4rem;
    }

    & > span > b {
      ${theme.fonts.body3_bold}
    }

    & > .icArrowDown {
      margin-right: 1.8rem;
    }
  `,
  FooterSocialNetwork: styled.div`
    display: flex;
    justify-content: center;

    margin: 4rem 0;
    gap: 0.8rem;

    height: 3.2rem;
    width: 15.2rem;
  `,
  FooterMenuTop: styled.div`
    display: flex;
    justify-content: center;

    gap: 1.2rem;
    margin-bottom: 0.8rem;

    height: 1.8rem;
    width: 29.3rem;

    ${theme.fonts.body5}
  `,
  FooterMenuBottom: styled.div`
    display: flex;
    justify-content: center;

    height: 1.8rem;
    width: 16.5rem;

    gap: 1.2rem;

    margin-bottom: 2.4rem;

    ${theme.fonts.body5}
  `,
};
