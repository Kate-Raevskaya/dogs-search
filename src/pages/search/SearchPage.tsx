import { useSearchParams } from "react-router-dom"

import { BreedsContainer } from "../../components/BreedsContainer/BreedsContainer"
import { SearchField } from "../../components/SearchField/SearchField"
import { useGetDogsByBreedQuery } from "../../store/apiSlice"

const SearchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  let query = searchParams.get("breed") || ""

  let { data: dogs = [], isLoading } = useGetDogsByBreedQuery(query)

  function handleSubmit(query: string) {
    setSearchParams(new URLSearchParams({ breed: query }))
  }

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

export default SearchPage
