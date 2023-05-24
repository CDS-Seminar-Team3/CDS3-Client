import { selectorFamily, selector } from 'recoil';
import useGetCurrentPetition from '../hooks/useGetCurrentPetition';

export const currentPetitionSelector = selector({
  key: 'currentPetitionSelector',
  get: () => {
    const currentPetition = useGetCurrentPetition();
    console.log(currentPetition);
    return currentPetition;
  },
});
