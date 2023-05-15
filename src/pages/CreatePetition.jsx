import PageName from '../components/common/PageName';
import Caution from '../components/createPetition/Caution';
import InputForm from '../components/createPetition/InputForm';

const CreatePetition = () => {
  return (
    <div>
      <PageName>청원 글 작성하기</PageName>
      <Caution />
      <InputForm />
    </div>
  );
};

export default CreatePetition;
