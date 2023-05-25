import Caution from '../components/createPetition/Caution';
import CreatePetitionPageName from '../components/createPetition/CreatePetitionPageName';
import InputForm from '../components/createPetition/InputForm';

const CreatePetition = () => {
  return (
    <div>
      <CreatePetitionPageName/>
      <Caution />
      <InputForm />
    </div>
  );
};

export default CreatePetition;
