import { atom } from 'recoil';

export const currentMyPetitionPageState = atom({
  key: 'currentPage',
  default: 1,
});

export const detailAgreedListPageState = atom({
  key: 'agreedListPage',
  default: 1,
});
