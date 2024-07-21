import { useAppSelector } from "../store/hooks"
import { getFavorites } from "../store/selectors"

export const useIsDogSave = (id: number) => {
  let dogsId = useAppSelector(getFavorites)
  return dogsId.includes(id)
}
