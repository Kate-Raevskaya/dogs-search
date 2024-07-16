import { useAppSelector } from "../store/hooks"

export const useIsLoggedIn = () => {
  return useAppSelector(state => state.user.email)
}
