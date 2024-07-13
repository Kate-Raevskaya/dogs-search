import type React from "react"

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
    <div
      className={isSaved ? "save-button saved" : "save-button"}
      onClick={handleClick}
    >
      {isSaved ? "Delete" : `Save`}
    </div>
  )
}
