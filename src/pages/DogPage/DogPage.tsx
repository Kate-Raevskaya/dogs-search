import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import type { DogDescription, DogImage } from "../../types/dog-types"
import "./DogPage.scss"

async function getDogDescription(
  id: string | undefined,
): Promise<DogDescription> {
  if (id === undefined) {
    throw new Error("id is required")
  }
  let response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
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

async function getDogImages(id: number): Promise<DogImage[]> {
  let response = await fetch(
    `https://api.thedogapi.com/v1/images/search?limit=3&breed_ids=${id}`,
    {
      headers: {
        "x-api-key": import.meta.env.VITE_DOG_API_KEY,
      },
    },
  )

  if (response.ok) {
    return await response.json()
  } else {
    throw new Error("Something went wrong!")
  }
}

export const DogPage = () => {
  let [dogsImages, setDogsImages] = useState<DogImage[]>([])
  let [dog, setDog] = useState<DogDescription | null>(null)
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    getDogDescription(id).then(dog => {
      setDog(dog)
    })
  }, [id])

  useEffect(() => {
    if (dog) {
      getDogImages(dog.id).then(imageArray => {
        setDogsImages(imageArray)
      })
    }
  }, [dog])

  let images = dogsImages.map(image => {
    return (
      <div key={image.id} className="dog-image">
        <img alt="dog" src={image.url}></img>
      </div>
    )
  })

  if (!dog) {
    return <div className="dog-card-loading">Card is loading</div>
  }

  return (
    <div className="dog-page-container">
      <button
        onClick={() => {
          navigate("/")
        }}
      >
        Go back
      </button>
      <div className="dog-full-card">
        <div className="dog-images-container">{images}</div>
        <div className="dog-full-description">
          <h2 className="breed-name">{dog.name}</h2>
          <p className="breed-description">
            <b>Origin:</b> {dog.origin}
          </p>
          <p className="breed-description">
            <b>Height:</b> {dog.height.metric} cm
          </p>
          <p className="breed-description">
            <b>Weight:</b> {dog.weight.metric} cm
          </p>
          <p className="breed-description">
            <b>Life:</b> {dog.life_span} age
          </p>
          <p className="breed-description">
            <b>Breed for:</b> {dog.bred_for}
          </p>
          <p className="breed-description">
            <b>Temperament:</b> {dog.temperament}
          </p>
        </div>
      </div>
    </div>
  )
}
