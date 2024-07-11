import { useAppSelector } from "../store/hooks"

export const useIsLoggedIn = () => {
  let userEmail = useAppSelector(state => state.user.email)

  return !!userEmail
}
