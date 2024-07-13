import { addFavoriteDog, removeFavoriteDog } from "../store/favoritesSlice"
import { useAppDispatch } from "../store/hooks"
import { useIsDogSave } from "./useIsDogSave"
import { useIsLoggedIn } from "./useIsLoggedIn"

export const useToggleFavorite = (id: number) => {
  let isAuth = useIsLoggedIn()
  let isSaved = useIsDogSave(id)
  let dispatch = useAppDispatch()

  function toggleFavorite() {
    if (!isAuth) {
      alert("Signin and save your favorites breeds")
    } else {
      if (isSaved) {
        dispatch(removeFavoriteDog(id))
      } else {
        dispatch(addFavoriteDog(id))
      }
    }
  }

  return { isSaved, toggleFavorite }
}
