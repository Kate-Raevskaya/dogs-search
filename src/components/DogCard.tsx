import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

import { useToggleFavorite } from "../hooks/useToggleFavorite"
import "./DogCard.scss"
import { FavoriteButton } from "./FavoriteButton"

type Props = {
  id: number
  url: string
  breed: string
}

export const DogCard = ({ id, url, breed }: Props) => {
  let navigate = useNavigate()
  let { isSaved, toggleFavorite } = useToggleFavorite(id)

  return (
    <div className="dog-card" onClick={() => navigate(`/dogs/${id}`)}>
      <div className="dog-card-image">
        <img alt="dog" src={url}></img>
      </div>
      <div className="dog-card-details">
        <h3>{breed}</h3>
        <FavoriteButton onClick={toggleFavorite} isSaved={isSaved} />
      </div>
    </div>
  )
}

DogCard.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
}
