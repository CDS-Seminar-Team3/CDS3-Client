import styled from 'styled-components';
import theme from '../../styles/theme';

const Caution = () => {
  return (
    <St.CautionWrapper>
      <St.Caution>
        <h3>*주의사항</h3>
        <article>
          1. 욕설 및 비속어는 삼가주세요. <br />
          2. 폭력적, 선정적인 내용, 청소년에게 해로운 내용은 없는지 확인해주세요. <br />
          3. 허위 사실이나 타인의 명예를 훼손할 수 있는지 한 번 더 생각해주세요.
          <br />
          4. 방송통신심의 위원회 ‘정보통신에 관한 심의규정’, ‘한국인터넷자율정책기구의 [정책규정]
          등을 기반으로 문제 게시물은 [숨김처리] 또는 [삭제]될 수 있습니다. <br />
          5. 청원 제한사항에 해당하는 글을 반복해 게재할 경우 사이트 접속이 제한될 수 있습니다.{' '}
          <br />
          6. 청원작성을 위해서는 <span>[KBS 회원가입]</span>이 필요합니다. 답변 및 회신 등을 위한
          것입니다. 단, 청원 동의는 SNS 회원도 가능합니다. <br />
          7. 청원 작성전 비슷한 청원이 있는지 검색을 통해 확인해 주세요. <br />
          8. 같은 내용으로 중복 게시한 청원은 최초 1개 청원만 남기고 삭제됩니다. <br />
          9. 작성된 청원은 수정 및 삭제가 불가능합니다. 신중하게 작성하여 주시기 바랍니다. (최초
          청원 취지와 다른 내용으로 변경되는 것을 방지하여 청원참여자 의견을 보호하기 위한
          것입니다.)
        </article>
        <St.ConfirmCaution>
          <input type="checkbox" /> 위 내용을 확인했습니다.
        </St.ConfirmCaution>
      </St.Caution>
    </St.CautionWrapper>
  );
};

export default Caution;

const St = {
  CautionWrapper: styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 3.2rem;
  `,
  Caution: styled.div`
    width: 34.2rem;
    height: 43.3rem;
    border-radius: 0.4rem;
    padding: 1.6rem;
    padding-bottom: 2.55rem;

    background-color: ${theme.colors.gray100};

    & > h3 {
      padding-bottom: 0.8rem;

      ${theme.fonts.body1}
    }

    & > article {
      padding-bottom: 1.75rem;
      color: ${theme.colors.gray400};

      ${theme.fonts.body3}

      & > span {
        ${theme.fonts.body3_bold}
      }
    }
  `,
  ConfirmCaution: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.fonts.body1}

    & > input {
      display: inline-block;

      height: 1.6rem;
      width: 1.6rem;
      margin-right: 0.8rem;
      //border-width 적용 안 됨 이슈
      border-width: 0.2rem;
      border-style: solid;
      border-color: ${theme.colors.gray400};
      border-radius: 0.4rem;
    }
  `,
};
