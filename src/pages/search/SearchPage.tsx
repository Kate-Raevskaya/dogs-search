import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { BreedsContainer } from "../../components/BreedsContainer"
import { SearchField } from "../../components/SearchField"
import type { ApiDog, Dog } from "../../types/dog-types"

async function getBreedByQuery(query: string): Promise<ApiDog[]> {
  let response = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${query}`,
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

export const SearchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let [dogs, setDogs] = useState<Dog[]>([])
  let [isLoading, setIsLoading] = useState<boolean>(false)

  let query = searchParams.get("breed")

  function handleSubmit(query: string) {
    setSearchParams(new URLSearchParams({ breed: query }))
  }

  useEffect(() => {
    setIsLoading(true)
    getBreedByQuery(query).then(dogsArray => {
      setDogs(
        dogsArray.map((dog): Dog => {
          return { id: dog.id, url: dog.image?.url || "", breed: dog.name }
        }),
      )
      setIsLoading(false)
    })
  }, [query])

  return (
    <div className="search-page-container">
      <SearchField onSubmit={handleSubmit} initialValue={query} />
      <p>Found by query {query}</p>
      {isLoading ? (
        <>Loading...</>
      ) : dogs.length !== 0 ? (
        <BreedsContainer dogs={dogs} />
      ) : (
        <p>{query} not found :(</p>
      )}
    </div>
  )
}
