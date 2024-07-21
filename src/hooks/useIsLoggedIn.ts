import { useAppSelector } from "../store/hooks"
import { getUserEmail } from "../store/selectors"

export const useIsLoggedIn = () => {
  return useAppSelector(getUserEmail)
}
