import { atom } from 'recoil';

export const categoryState = atom({
  key: 'category',
  default: '카테고리를 선택해주세요.',
});

export const titleState = atom({
  key: 'title',
  default: '',
});

export const contentState = atom({
  key: 'content',
  default: '',
});

export const checkCautionState = atom({
  key: 'checkCaution',
  default: false,
});

export const isRegisterState = atom({
  key: 'isRegister',
  default: false,
});