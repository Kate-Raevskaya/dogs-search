import { BreedsContainer } from "../../components/BreedsContainer"
import "./Home.scss"

export const Home = () => {
  return (
    <>
      <div className="preview">
        <h1>Find your best friend</h1>
        <input type="text" placeholder="Enter breed" />
        {/*todo: create search component*/}
      </div>
      <div className="all-breeds-container">
        <h2>All breeds</h2>
        <BreedsContainer />
      </div>
    </>
  )
}
