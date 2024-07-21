import PropTypes from "prop-types"
import type React from "react"

import "./FavoriteButton.scss"

type Props = {
  isSaved: boolean
  onClick: () => void
}

export const FavoriteButton = ({ isSaved, onClick }: Props) => {
  function handleClick(e: React.MouseEvent) {
    e.stopPropagation()
    onClick()
  }

  return (
    <div className="save-container">
      <div
        className={isSaved ? "save-button saved" : "save-button"}
        onClick={handleClick}
      >
        {/*Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools*/}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
            fill="currenColor"
          />
        </svg>
      </div>
    </div>
  )
}

FavoriteButton.propTypes = {
  isSaved: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
