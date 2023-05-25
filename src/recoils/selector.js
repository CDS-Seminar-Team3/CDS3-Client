import { selector } from 'recoil';
import useGetCurrentPetition from '../hooks/useGetCurrentPetition';

export const currentPetitionSelector = selector({
  key: 'currentPetitionSelector',
  get: async () => {
    const currentPetition = await useGetCurrentPetition();
    return currentPetition.newPetitionList;
  },
});

export const issuePetitionSelector = selector({
  key: 'issuePetitionSelector',
  get: async () => {
    const issuePetition = await useGetCurrentPetition();
    console.log(issuePetition.issuePetition);
    return issuePetition.issuePetition;
  },
});
