import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const PetitionHeader = () => {
  return (
    <St.IssuePetition>
      <St.PetitionHeader>
        <St.HeaderTitle>편성</St.HeaderTitle>
        <St.HeaderSubWrapper>
          <St.HeaderText>동의수 </St.HeaderText>
          <St.HeaderNum>1,229</St.HeaderNum>
        </St.HeaderSubWrapper>
      </St.PetitionHeader>
      <St.MainText>제목</St.MainText>
      <St.PetitionFooter>
        <St.TextWrapper>
          <St.BlurredText>청원자</St.BlurredText>
          <St.FooterText>아이디</St.FooterText>
        </St.TextWrapper>
        <St.TextWrapper>
          <St.BlurredText>청원마감</St.BlurredText>
          <St.FooterText>YYYY.05.21</St.FooterText>
          <St.DdayWrapper>D-N</St.DdayWrapper>
        </St.TextWrapper>
      </St.PetitionFooter>
    </St.IssuePetition>
  );
};

const St = {
  IssuePetition: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 11.9rem;
    border: 0.2rem solid ${theme.colors.gray100};
    padding: 1rem;
    gap: 0.8rem;

    box-sizing: border-box;
  `,
  PetitionHeader: styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 33.3%;
  `,
  HeaderTitle: styled.article`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 5.4rem;
    height: 2.3rem;

    border: 1px solid ${theme.colors.blue};
    border-radius: 20px;

    ${theme.fonts.caption1}
    color:${theme.colors.blue}
  `,
  HeaderSubWrapper: styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  HeaderText: styled.span`
    ${theme.fonts.body1_bold};
    color: ${theme.colors.blue};
  `,
  HeaderNum: styled.span`
    color: ${theme.colors.blue};
    ${theme.fonts.head1};
  `,

  MainText: styled.h1`
    ${theme.fonts.head2};
  `,

  PetitionFooter: styled.footer`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  BlurredText: styled.span`
    color: ${theme.colors.gray400};
    ${theme.fonts.body2};
  `,
  FooterText: styled.span`
    ${theme.fonts.body1};
  `,
  TextWrapper: styled.article`
    display: flex;
    gap: 0.4rem;
  `,
  DdayWrapper: styled.article`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 4rem;

    color: ${theme.colors.white};
    background: ${theme.colors.blue};
    border-radius: 2rem;
  `,
};
export default PetitionHeader;
