import { useNavigate, useParams } from "react-router-dom"

import { FavoriteButton } from "../../components/Buttons/FavoriteButton"
import { useToggleFavorite } from "../../hooks/useToggleFavorite"
import {
  useGetDogByIdQuery,
  useGetDogImagesByIdQuery,
} from "../../store/apiSlice"
import "./DogPage.scss"

const DogPage = () => {
  let { idParam = "" } = useParams()

  let id = parseInt(idParam)

  let { isSaved, toggleFavorite } = useToggleFavorite(id)

  let { data: dog, isLoading, isError } = useGetDogByIdQuery(id)
  let { data: dogImages = [], isLoading: imagesIsLoading } =
    useGetDogImagesByIdQuery(id)

  let navigate = useNavigate()

  if (Number.isNaN(id) || isError) {
    return <div className="loading">Sorry, this breed isn't found</div>
  }

  if (!dog || isLoading) {
    return <div className="loading">Card is loading...</div>
  }

  return (
    <div className="dog-page-container">
      <button
        className="go-back-button"
        onClick={() => {
          navigate("/")
        }}
      >
        Go back
      </button>
      <div className="dog-full-card">
        <div className="dog-full-description">
          <div className="breed">
            <h2 className="breed-name">{dog.name}</h2>
            <FavoriteButton onClick={toggleFavorite} isSaved={isSaved} />
          </div>
          <div className="description">
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
        <div className="dog-main-image">
          <img
            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
            alt="dog"
          />
        </div>
      </div>
      <div className="dog-images-container">
        {imagesIsLoading ? (
          <div className="loading">Images are loading...</div>
        ) : (
          dogImages.map(image => {
            return (
              <div key={image.id} className="dog-image">
                <img alt="dog" src={image.url}></img>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default DogPage
