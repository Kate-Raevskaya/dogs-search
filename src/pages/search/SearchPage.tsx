import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { getBreedByQuery } from "../../api/dog-api"
import { BreedsContainer } from "../../components/BreedsContainer"
import { SearchField } from "../../components/SearchField"
import type { Dog } from "../../types/dog-types"

export const SearchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let [dogs, setDogs] = useState<Dog[]>([])
  let [isLoading, setIsLoading] = useState<boolean>(false)

  let query = searchParams.get("breed") || ""

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
