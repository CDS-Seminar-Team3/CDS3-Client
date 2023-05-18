import styled from 'styled-components';
import theme from '../../styles/theme';
import { IcShare } from '../../assets/icons/0_icons';

const PetitionContent = () => {
  return (
    <St.PetitionContentWrapper>
      <St.ContentWrapper>
        <h3>청원내용</h3>
        <IcShare />
      </St.ContentWrapper>
      <St.PetitionContent>
        주말 저녁 온 가족이 함께 보는 드라마~~ 하지만 부모에게 돈을 들먹이며 이혼하라는 딸과... 돈을
        받겠다는 일념으로 딸의 일이라면 어떤 일이든 서슴치 않고 하는 엄마의 모습에 눈살을 찌푸리게
        되네요... 또한 주인공들을 따라다니며 온갖 거짓된 행동들.. 그걸 부추기며 어른답지 못한
        할머니의 모습까지.. 주말 드라마와 맞지 않는 선정인 것 같습니다.. 온가족이 마음 따듯하게
        시청할 수 있는 드라마가 되면 좋겠습니다..
      </St.PetitionContent>
    </St.PetitionContentWrapper>
  );
};

export default PetitionContent;

const St = {
  PetitionContentWrapper: styled.div`
    width: 34.3rem;
    height: 20.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 34.3rem;
    color: ${theme.colors.gray600};

    & > h3 {
      ${theme.fonts.body1_bold}
    }
  `,
  PetitionContent: styled.p`
    width: 34.3rem;

    padding: 0.8rem 0.8rem 1.2rem 0.8rem;

    ${theme.fonts.body1}
    color:${theme.colors.gray600};

    border-top: 0.1rem solid ${theme.colors.gray400};
    border-bottom: 0.1rem solid ${theme.colors.gray400};
  `,
};
