import styled from 'styled-components';
import theme from '../../styles/theme';
import { IcProgress, IcProgress2, IcProgress3 } from '../../assets/icons/0_icons';

const PetitionInfo = () => {
  return (
    <St.PetitionInfoWrapper>
      <span className="PetitionStatus">청원진행중</span>
      <St.Row className="PetitionTitle">
        <span>[프로그램 #15674]</span>
        <span>진짜가 나타났다</span>
      </St.Row>
      <St.Row>
        <St.InfoItem>청원자</St.InfoItem>
        <St.InfoContent>윤성*(sung2****)</St.InfoContent>
      </St.Row>
      <St.Row>
        <St.InfoItem>청원기간</St.InfoItem>
        <St.InfoContent>2023.05.07 ~ 2023.06.06</St.InfoContent>
      </St.Row>
      <St.Row className="AgreePetition">
        <St.AgreePetition>동의 수</St.AgreePetition>
        <St.AgreePetitionNum>1</St.AgreePetitionNum>
      </St.Row>
      <St.PetitionProgress>
        <St.ProgressBar />
        <St.ProgressDetail>
          <IcProgress />
          <span>청원 시작일</span>
          <span>23.05.07</span>
        </St.ProgressDetail>
        <St.ProgressDetail>
          <IcProgress2 />
          <span>청원 마감일</span>
          <span>23.06.06</span>
        </St.ProgressDetail>
        <St.ProgressDetail>
          <IcProgress3 />
          <span>답변 예상일</span>
          <span>23.07.06</span>
        </St.ProgressDetail>
      </St.PetitionProgress>
    </St.PetitionInfoWrapper>
  );
};

export default PetitionInfo;

const St = {
  Row: styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.4rem;

    & > span {
      margin-right: 0.4rem;
    }
  `,
  PetitionInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 34.3rem;
    margin: 2.4rem 0;

    border: 0.1rem solid ${theme.colors.gray200};

    & > span {
      padding: 0.4rem 1.2rem;
      border-radius: 2.4rem;

      ${theme.fonts.body3_bold}

      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};
    }

    & > .PetitionStatus {
      margin-top: 2.4rem;
    }

    & > .AgreePetition {
      margin-top: 0.8rem;
      margin-bottom: 2.4rem;
    }

    & > .PetitionTitle {
      margin-top: 0.8rem;

      & > span {
        ${theme.fonts.body1}
      }

      & > span:last-of-type {
        ${theme.fonts.body1_bold}
      }
    }
  `,

  InfoItem: styled.span`
    ${theme.fonts.body3_bold}
    color: ${theme.colors.gray400};
  `,
  InfoContent: styled.span`
    ${theme.fonts.body3}
    color: ${theme.colors.gray400};
  `,
  AgreePetition: styled.span`
    ${theme.fonts.body1_bold};
    color: ${theme.colors.blue};
  `,
  AgreePetitionNum: styled.span`
    color: ${theme.colors.blue};
    ${theme.fonts.head1};
  `,
  PetitionProgress: styled.div`
    display: flex;
    justify-content: center;
    width: 34.3rem;
    height: 9.6rem;

    position: relative;
    background-color: ${theme.colors.gray100};

    border-top: 0.1rem solid ${theme.colors.gray200};
    border-right: 0.1rem solid ${theme.colors.gray200};
    border-left: 0.1rem solid ${theme.colors.gray200};

    & > div:nth-of-type(2) {
      left: 2.4rem;
    }

    & > div:nth-of-type(4) {
      right: 2.4rem;
    }
  `,
  ProgressBar: styled.div`
    width: 29.6rem;
    height: 0.2rem;

    margin-top: 2.8rem;

    background-color: ${theme.colors.gray300};
  `,
  ProgressDetail: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: -1.2rem;
    margin-top: 2.8rem;

    & > span {
      ${theme.fonts.body3}
    }

    & > span:last-of-type {
      ${theme.fonts.body3_bold}
    }
  `,
};
