import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';
import { ReactComponent as IcRedDot } from '../../assets/icons/IcRedDot.svg';
import { ReactComponent as IcLinkAdd } from '../../assets/icons/IcLinkAdd.svg';

const InputForm = () => {
  return (
    <St.InputFormWrapper>
      <div>
        <h3>
          카테고리
          <span>
            <IcRedDot />
          </span>
        </h3>
        <select>
          <option>카테고리를 선택해주세요.</option>
          <option>편성</option>
          <option>보도</option>
          <option>프로그램</option>
          <option>방송기술</option>
          <option>방송경영</option>
          <option>SNS·홈페이지</option>
          <option>시청자권익</option>
          <option>기타</option>
        </select>
      </div>
      <div>
        <h3>
          제목
          <span>
            <IcRedDot />
          </span>
        </h3>
        <input placeholder="제목을 입력해주세요." />
      </div>
      <div>
        <h3>
          내용
          <span>
            <IcRedDot />
          </span>
        </h3>
        <textarea className="contentInput" placeholder="청원 내용을 입력해주세요." />
      </div>
      <div>
        <h3>링크</h3>
        <div className="buttonWrapper">
          <input />
          <button>
            <IcLinkAdd />
            <div>링크 추가</div>
          </button>
        </div>
      </div>
      <div className="InfoRequiredFields">
        <span>
          <IcRedDot />
        </span>
        표시된 항목은 필수 입력사항입니다.
      </div>
    </St.InputFormWrapper>
  );
};

export default InputForm;

const St = {
  InputFormWrapper: styled.div`
    margin: 0 2rem;

    & > div {
      display: flex;
      justify-content: space-between;

      margin-bottom: 2rem;

      & > h3 {
        display: flex;
        align-items: flex-start;

        ${theme.fonts.body1_bold}

        & > span {
          margin-left: 0.2rem;
          & > svg {
            display: flex;
            align-items: flex-start;
          }
        }
      }

      & > select {
        width: 26.8rem;
        height: 3.6rem;
        border-radius: 2.4rem;
        border: 0.1rem solid ${theme.colors.gray200};
        padding-left: 1.6rem;

        color: ${theme.colors.blue};
        background: ${theme.colors.gray100};
      }

      & > .contentInput {
        width: 27.1rem;
        height: 9.6rem;
        padding-top: 0.8rem;
        padding-left: 1.6rem;
        border: 0.1rem solid ${theme.colors.gray200};

        ${theme.fonts.body2}

        resize: none;
      }

      & > input {
        width: 27.1rem;
        height: 4rem;
        padding-left: 1.6rem;
        border: 0.1rem solid ${theme.colors.gray200};

        ${theme.fonts.body2}
        color: ${theme.colors.gray800};
        &::placeholder {
          color: ${theme.colors.gray400};
        }
      }

      & > .buttonWrapper {
        display: flex;
        flex-wrap: wrap;

        width: 27.1rem;

        & > input {
          width: 27.1rem;
          height: 4rem;
          margin-bottom: 0.8rem;
          padding-left: 1.6rem;
          border: 0.1rem solid ${theme.colors.gray200};

          ${theme.fonts.body2}
          color: ${theme.colors.gray800};
        }

        & > button {
          display: flex;
          align-items: center;
          vertical-align: center;

          width: 27.1rem;
          height: 4rem;
          border: 0.1rem solid ${theme.colors.gray200};

          & > div {
            display: flex;
            align-items: center;
            ${theme.fonts.body2}
            color: ${theme.colors.gray400}
          }
        }
      }
    }

    & > .InfoRequiredFields {
      display: flex;
      justify-content: flex-end;
      padding-top: 0.8rem;

      ${theme.fonts.body2}
      color: ${theme.colors.red};

      & > span {
        margin-right: 0.2rem;
        & > svg {
          display: flex;
          align-items: flex-start;
        }
      }
    }
  `,
};
