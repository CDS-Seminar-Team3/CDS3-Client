import { selector } from 'recoil';
import useGetCurrentPetition from '../hooks/useGetCurrentPetition';

export const currentPetitionSelector = selector({
  key: 'currentPetitionSelector',
  get: () => {
    const currentPetition = useGetCurrentPetition();

    return currentPetition;
  },
});
