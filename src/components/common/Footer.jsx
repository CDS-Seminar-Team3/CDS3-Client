import { styled } from 'styled-components';
import theme from '../../styles/theme';
import {
  IcArrowDown,
  IcFacebook,
  IcInstagram,
  IcTwitter,
  IcYoutube,
} from '../../assets/icons/0_icons';

const Footer = () => {
  return (
    <St.FooterWrapper>
      <St.FooterDownload>
        <span>
          <b className="downloadBold">KBS 애플리케이션</b> 다운로드
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
      <div className="footerCopyright">
        <span>KBS </span> <span>ALL rights reserved</span>
      </div>
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
    }

    & > .footerCopyright > span {
      ${theme.fonts.footer_copyright_bold}
    }

    & > .footerCopyright > span:last-of-type {
      ${theme.fonts.footer_copyright}
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

    .downloadBold {
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

    span {
      ${theme.fonts.body5}
    }

    & > span:nth-of-type(4) {
      ${theme.fonts.body4}
    }
  `,
  FooterMenuBottom: styled.div`
    display: flex;
    justify-content: center;

    height: 1.8rem;
    width: 16.5rem;

    gap: 1.2rem;

    margin-bottom: 2.4rem;

    span {
      ${theme.fonts.body5}
    }
  `,
};
