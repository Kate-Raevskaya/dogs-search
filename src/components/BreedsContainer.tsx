import { useEffect, useState } from "react"

import type { ApiDog } from "../types/dog-types"
import type { Dog } from "../types/dog-types"
import "./BreedsContainer.scss"
import { DogCard } from "./DogCard"

async function getAllDogs(): Promise<ApiDog[]> {
  let response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": import.meta.env.VITE_DOG_API_KEY,
    },
  })

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error("Something went wrong!")
  }
}

export const BreedsContainer = () => {
  let [dogs, setDogs] = useState<Dog[]>([])

  useEffect(() => {
    getAllDogs().then(dogsArray => {
      setDogs(
        dogsArray.map((dog): Dog => {
          return { id: dog.id, url: dog.image.url, breed: dog.name }
        }),
      )
    })
  }, [])

  return (
    <div className="all-breeds">
      {dogs.map(dog => (
        <DogCard key={dog.id} url={dog.url} breed={dog.breed} />
      ))}
    </div>
  )
}
