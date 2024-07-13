import { useAppSelector } from "../store/hooks"

export const useIsDogSave = (id: number) => {
  let dogsId = useAppSelector(state => state.favorites)
  return dogsId.includes(id)
}
