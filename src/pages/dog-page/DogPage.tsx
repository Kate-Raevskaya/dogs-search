import { useNavigate, useParams } from "react-router-dom"

import { FavoriteButton } from "../../components/FavoriteButton"
import { useToggleFavorite } from "../../hooks/useToggleFavorite"
import {
  useGetDogByIdQuery,
  useGetDogImagesByIdQuery,
} from "../../store/apiSlice"
import "./DogPage.scss"

export const DogPage = () => {
  let { idParam } = useParams()

  if (idParam === undefined) {
    throw new Error("IdParam is missing")
  }

  let id = parseInt(idParam)
  if (Number.isNaN(id)) {
    throw new Error("Parameter isn't a number")
  }

  let { isSaved, toggleFavorite } = useToggleFavorite(id)

  let { data: dog, isLoading } = useGetDogByIdQuery(id)
  let { data: dogImages = [], isLoading: imagesIsLoading } =
    useGetDogImagesByIdQuery(id)

  let navigate = useNavigate()

  let images = imagesIsLoading ? (
    <div className="dog-image-loading">Images are loading...</div>
  ) : (
    dogImages.map(image => {
      return (
        <div key={image.id} className="dog-image">
          <img alt="dog" src={image.url}></img>
        </div>
      )
    })
  )

  if (!dog || isLoading) {
    return <div className="dog-card-loading">Card is loading...</div>
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
        <FavoriteButton onClick={toggleFavorite} isSaved={isSaved} />
      </div>
    </div>
  )
}
