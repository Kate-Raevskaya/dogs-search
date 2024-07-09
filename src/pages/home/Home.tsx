import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { BreedsContainer } from "../../components/BreedsContainer"
import { SearchField } from "../../components/SearchField"
import type { ApiDog, Dog } from "../../types/dog-types"
import "./Home.scss"

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

export const Home = () => {
  let [dogs, setDogs] = useState<Dog[]>([])
  let navigate = useNavigate()

  useEffect(() => {
    getAllDogs().then(dogsArray => {
      setDogs(
        dogsArray.map((dog): Dog => {
          return { id: dog.id, url: dog.image?.url || "", breed: dog.name }
        }),
      )
    })
  }, [])

  function handleSubmit(query: string) {
    navigate(`/search?breed=${query}`)
  }

  return (
    <>
      <div className="preview">
        <h1>Find your best friend</h1>
        <SearchField onSubmit={handleSubmit} initialValue="" />
      </div>
      <div className="all-breeds-container">
        <h2>All breeds</h2>
        <BreedsContainer dogs={dogs} />
      </div>
    </>
  )
}
