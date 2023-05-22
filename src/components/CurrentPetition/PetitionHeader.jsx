import styled from 'styled-components';
import theme from '../../styles/theme';

const PetitionHeader = () => {
  return (
    <St.PetitionHeaderWrapper>
      <St.HeaderContainer>
        <article>편성</article>
        <section>
          <span>동의수 </span>
          <span>1,229</span>
        </section>
      </St.HeaderContainer>
      <h1>제목</h1>
      <St.FooterContainer>
        <section>
          <span>청원자</span>
          <span>아이디</span>
        </section>
        <section>
          <span>청원마감</span>
          <span>YYYY.05.21</span>
          <article>D-N</article>
        </section>
      </St.FooterContainer>
    </St.PetitionHeaderWrapper>
  );
};

const St = {
  PetitionHeaderWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 33.5rem;
    height: 11.9rem;
    border: 0.2rem solid ${theme.colors.gray100};
    padding: 1rem;
    gap: 0.8rem;

    box-sizing: border-box;

    & > h1 {
      ${theme.fonts.head2};
    }
  `,
  HeaderContainer: styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 33.3%;

    & > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      & > span:nth-child(1) {
        ${theme.fonts.body1_bold};
        color: ${theme.colors.blue};
      }

      & > span:nth-child(2) {
        color: ${theme.colors.blue};
        ${theme.fonts.head1};
      }
    }

    & > article:first-child {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 5.4rem;
      height: 2.3rem;

      border: 1px solid ${theme.colors.blue};
      border-radius: 20px;

      ${theme.fonts.caption1}
      color:${theme.colors.blue}
    }
  `,

  FooterContainer: styled.footer`
    display: flex;
    align-items: center;
    gap: 1rem;

    & > section {
      display: flex;
      gap: 0.4rem;

      & > span:nth-child(1) {
        color: ${theme.colors.gray400};
        ${theme.fonts.body2};
      }
      & > span:nth-child(2) {
        ${theme.fonts.body1};
      }

      & > article {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 4rem;

        color: ${theme.colors.white};
        background: ${theme.colors.blue};
        border-radius: 2rem;
      }
    }
  `,
};
export default PetitionHeader;
