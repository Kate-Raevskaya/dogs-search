import { useNavigate } from "react-router-dom"

import { BreedsContainer } from "../../components/BreedsContainer/BreedsContainer"
import { SearchField } from "../../components/SearchField/SearchField"
import { useGetAllDogsQuery } from "../../store/apiSlice"
import "./Home.scss"

export const Home = () => {
  let { data: dogs = [], isLoading } = useGetAllDogsQuery()
  let navigate = useNavigate()

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
        {isLoading ? <p>Loading...</p> : <BreedsContainer dogs={dogs} />}
      </div>
    </>
  )
}
