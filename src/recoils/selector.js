import { selectorFamily, selector } from 'recoil';
import useGetCurrentPetition from '../hooks/useGetCurrentPetition';

export const currentPetitionSelector = selector({
  key: 'currentPetitionSelector',
  get: () => {
    const currentPetition = useGetCurrentPetition();
    // console.log(currentPetition);
    return currentPetition;
  },
});

export const searchCurrentPetitionSelector = selectorFamily({
  key: 'searchCurrentPetitionSelector',
  get:
    param =>
    ({ get }) => {
      const searchPetition = get(currentPetitionSelector);
      // console.log(searchPetition);

      if (param) {
        return searchPetition.filter(item => item.title.includes(param));
      } else {
        return searchPetition;
      }
    },
});
