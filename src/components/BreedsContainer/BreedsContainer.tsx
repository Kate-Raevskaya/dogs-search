import type { Dog } from "../../types/dog-types"
import { DogCard } from "../DogCard/DogCard"
import "./BreedsContainer.scss"

type Props = {
  dogs: Dog[]
}

export const BreedsContainer = ({ dogs }: Props) => {
  return (
    <div className="all-breeds">
      {dogs.map(dog => (
        <DogCard key={dog.id} id={dog.id} url={dog.url} breed={dog.breed} />
      ))}
    </div>
  )
}
