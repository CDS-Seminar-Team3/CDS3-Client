import Caution from '../components/createPetition/Caution';
import CreatePetitionPageName from '../components/createPetition/CreatePetitionPageName';
import InputForm from '../components/createPetition/InputForm';
import PetitionButtons from '../components/createPetition/PetitionButtons';

const CreatePetition = () => {
  return (
    <div>
      <CreatePetitionPageName/>
      <Caution />
      <InputForm />
      <PetitionButtons />
    </div>
  );
};

export default CreatePetition;
