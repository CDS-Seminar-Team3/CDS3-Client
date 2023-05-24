import React from 'react';
import PetitionList from '../components/common/PetitionList';
import { DATA } from '../constants/data';
import { styled } from 'styled-components';
import theme from '../styles/theme';
import Pagination from '../components/common/Pagination';
import CreatePetitionButton from '../components/common/CreatePetitionButton';
import useGetMyPetition from '../hooks/useGetMyPetition';

const MyPetition = () => {
  const { data, isLoading, isError } = useGetMyPetition();

  return (
    <St.MyPetitionWrapper>
      <St.PageNameWrapper>나의 청원</St.PageNameWrapper>
      <PetitionList data={data} />
      <Pagination />
      <CreatePetitionButton />
    </St.MyPetitionWrapper>
  );
};

export default MyPetition;

const St = {
  MyPetitionWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  PageNameWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 33.5rem;
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;

    ${theme.fonts.head2};
  `,
};
