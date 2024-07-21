import dog from "../../icons/dog-not-found.svg"
import "./NotFound.scss"

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <p>Page not found</p>
      <img src={dog} alt="dog" />
    </div>
  )
}
