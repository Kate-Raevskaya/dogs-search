import "./DogCard.scss"

type Props = {
  url: string
  breed: string
}

export const DogCard = ({ url, breed }: Props) => {
  return (
    <div className="dog-card">
      <div className="dog-card-image">
        <img alt="dog" src={url}></img>
      </div>
      <h3>{breed}</h3>
      <div className="save-button"></div>
    </div>
  )
}
