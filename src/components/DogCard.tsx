import { useNavigate } from "react-router-dom"

import "./DogCard.scss"

type Props = {
  id: number
  url: string
  breed: string
}

export const DogCard = ({ id, url, breed }: Props) => {
  let navigate = useNavigate()
  return (
    <div className="dog-card" onClick={() => navigate(`/dogs/${id}`)}>
      <div className="dog-card-image">
        <img alt="dog" src={url}></img>
      </div>
      <h3>{breed}</h3>
      <div className="save-button"></div>
    </div>
  )
}
