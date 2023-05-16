import React from 'react';
import { styled } from 'styled-components';
import theme from '../../styles/theme';

const InputForm = () => {
  return (
    <St.InputFormWrapper>
      <div>
        <h3>카테고리</h3>
        <select>
          <option>카테고리를 선택해주세요.</option>
          <option>편성</option>
          <option>보도</option>
          <option>프로그램</option>
          <option>방송기술</option>
          <option>방송경영</option>
          <option>SNS 홈페이지</option>
          <option>
            시청자<span>.</span>권익
          </option>
          <option>기타</option>
        </select>
      </div>
      <div>
        <h3>제목</h3>
        <input />
      </div>
      <div>
        <h3>내용</h3>
        <input className="contentInput" />
      </div>
      <div>
        <h3>링크</h3>
        <div className="buttonWrapper">
          <input />
          <button>링크 추가</button>
        </div>
      </div>
      <div className="InfoRequiredFields">표시된 항목은 필수 입력사항입니다.</div>
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
        ${theme.fonts.body1_bold}
      }

      & > select {
        width: 26.8rem;
      }

      & > .contentInput {
        height: 9.6rem;
      }

      & > input {
        width: 27.1rem;
        height: 4rem;
      }

      & > .buttonWrapper {
        display: flex;
        flex-wrap: wrap;

        width: 27.1rem;

        & > input {
          width: 27.1rem;
          height: 4rem;
          margin-bottom: 0.8rem;
        }

        & > button {
          width: 27.1rem;
          height: 4rem;
        }
      }
    }

    & > .InfoRequiredFields {
        padding-top: 0.8rem;
      }
  `,
};
