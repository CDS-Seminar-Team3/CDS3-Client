import styled from 'styled-components';
import theme from '../../styles/theme';
import { IcProgress, IcProgress2, IcProgress3 } from '../../assets/icons/0_icons';
import PropTypes from 'prop-types';

// 받은 날짜를 형식에 맞게 변환해주는 함수
const formatDate = date => {
  return date?.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
};

const formatFourDigitDate = date => {
  return date?.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

const PetitionInfo = ({ data }) => {
  const petitionData = data?.data;
  const petitionDate = new Date(data?.data.createdAt);

  const createdDate = formatDate(petitionDate);

  const dueDateObject = new Date(petitionDate);
  dueDateObject.setDate(dueDateObject.getDate() + 32);
  const dueDate = formatDate(dueDateObject);

  const finishDateObject = new Date(petitionDate);
  finishDateObject.setDate(finishDateObject.getDate() + 64);
  const finishDate = formatDate(finishDateObject);

  const createdDateFourDigits = formatFourDigitDate(petitionDate);

  const dueDateFourDigitsObject = new Date(petitionDate);
  dueDateFourDigitsObject.setDate(dueDateFourDigitsObject.getDate() + 32);
  const dueDateFourDigits = formatFourDigitDate(dueDateFourDigitsObject);

  return (
    <St.PetitionInfoWrapper>
      <span className="PetitionStatus">청원진행중</span>
      <St.Row className="PetitionTitle">
        <span>
          [{petitionData?.category} #{petitionData?.agreeNumber}]
        </span>
        <span>{petitionData?.title}</span>
      </St.Row>
      <St.Row>
        <St.InfoItem>청원자</St.InfoItem>
        <St.InfoContent>
          {petitionData?.name}({petitionData?.nickname})
        </St.InfoContent>
      </St.Row>
      <St.Row>
        <St.InfoItem>청원기간</St.InfoItem>
        <St.InfoContent>
          {createdDateFourDigits} ~ {dueDateFourDigits}
        </St.InfoContent>
      </St.Row>
      <St.Row className="AgreePetition">
        <St.AgreePetition>동의 수</St.AgreePetition>
        <St.AgreePetitionNum>{petitionData?.agreeNumber}</St.AgreePetitionNum>
      </St.Row>
      <St.PetitionProgress>
        <St.ProgressBar />
        <St.ProgressDetail>
          <IcProgress />
          <span>청원 시작일</span>
          <span>{createdDate}</span>
        </St.ProgressDetail>
        <St.ProgressDetail>
          <IcProgress2 />
          <span>청원 마감일</span>
          <span>{dueDate}</span>
        </St.ProgressDetail>
        <St.ProgressDetail>
          <IcProgress3 />
          <span>답변 예상일</span>
          <span>{finishDate}</span>
        </St.ProgressDetail>
      </St.PetitionProgress>
    </St.PetitionInfoWrapper>
  );
};

export default PetitionInfo;

PetitionInfo.propTypes = {
  data: PropTypes.object,
};

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
