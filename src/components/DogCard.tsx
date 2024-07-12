import { useNavigate } from "react-router-dom"

import "./DogCard.scss"

type Props = {
  id: number
  url: string
  breed: string
}

function handleSaveClick() {}

export const DogCard = ({ id, url, breed }: Props) => {
  let navigate = useNavigate()
  return (
    <div className="dog-card" onClick={() => navigate(`/dogs/${id}`)}>
      <div className="dog-card-image">
        <img alt="dog" src={url}></img>
      </div>
      <div className="dog-card-details">
        <h3>{breed}</h3>
        <div className="save-button" onClick={handleSaveClick}>
          Save&#x2764;&#xfe0f;
        </div>
      </div>
    </div>
  )
}
