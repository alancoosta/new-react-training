import DogDetails from "../dogDetails/DogDetails";
import DogList from "../dogList/DogList";
import { DogWrapperStyle } from "./DogWrapperView.styles";
import { DogBreed } from "../../types/DogBreedsTypes";

interface Props {
  dogBreeds: DogBreed[];
  isLoading: boolean;
  dogSelected: DogBreed;
  handleSelectDog: (dog: DogBreed) => void;
}

const DogWrapperView = ({
  dogBreeds,
  isLoading,
  dogSelected,
  handleSelectDog,
}: Props) => {
  const classes = DogWrapperStyle();

  return (
    <div className={classes.container}>
      <DogDetails name={dogSelected.name} image={dogSelected.image} />

      <DogList
        dogBreeds={dogBreeds}
        isLoading={isLoading}
        dogSelected={dogSelected}
        handleSelectDog={handleSelectDog}
      />
    </div>
  );
};

export default DogWrapperView;
