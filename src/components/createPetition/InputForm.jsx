import React from 'react';

const InputForm = () => {
  return (
    <div>
      <div>
        카테고리
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
        제목 <input />
      </div>
      <div>
        내용 <input />
      </div>
      <div>
        링크
        <div>
          <input />
          <button>링크 추가</button>
        </div>
      </div>
      <div>표시된 항목은 필수 입력사항입니다.</div>
    </div>
  );
};

export default InputForm;
