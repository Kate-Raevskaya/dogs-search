import { useNavigate } from "react-router-dom"

import { BreedsContainer } from "../../components/BreedsContainer/BreedsContainer"
import { SearchField } from "../../components/SearchField/SearchField"
import dogImage from "../../images/dog.jpg"
import { useGetAllDogsQuery } from "../../store/apiSlice"
import "./Home.scss"

const Home = () => {
  let { data: dogs = [], isLoading } = useGetAllDogsQuery()
  let navigate = useNavigate()

  function handleSubmit(query: string) {
    navigate(`/search?breed=${query}`)
  }

  return (
    <div className="home-page">
      <div className="preview">
        <div className="container description">
          <div>
            <h1>CHOOSE THE RIGHT DOG BREED</h1>
            <p>
              We will help you decide on the choice of dog and tell you more
              about the breed you like.
            </p>
          </div>
          <div>
            <p className="number-of-breeds">150+</p>
            <p>Dog Breed Characteristics</p>
          </div>
        </div>
        <div className="container preview-image">
          <img src={dogImage} alt="dog" />
        </div>
      </div>
      <div className="search-field">
        <h2>DOG BREEDS</h2>
        <SearchField onSubmit={handleSubmit} initialValue="" />
      </div>
      <div className="all-breeds-container">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <BreedsContainer dogs={dogs} />
        )}
      </div>
    </div>
  )
}

export default Home
