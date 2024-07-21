import { useSearchParams } from "react-router-dom"

import { BreedsContainer } from "../../components/BreedsContainer/BreedsContainer"
import { SearchField } from "../../components/SearchField/SearchField"
import { useGetDogsByBreedQuery } from "../../store/apiSlice"
import "./SearchPage.scss"

const SearchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  let query = searchParams.get("breed") || ""

  let { data: dogs = [], isLoading } = useGetDogsByBreedQuery(query)

  function handleSubmit(query: string) {
    setSearchParams(new URLSearchParams({ breed: query }))
  }

  return (
    <div className="search-page">
      <p className="search-page-header">Found by query {query}</p>
      <SearchField onSubmit={handleSubmit} initialValue={query} />
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : dogs.length !== 0 ? (
        <div className="found-breeds">
          <BreedsContainer dogs={dogs} />
        </div>
      ) : (
        <p className="not-found-message">{query} not found :(</p>
      )}
    </div>
  )
}

export default SearchPage
