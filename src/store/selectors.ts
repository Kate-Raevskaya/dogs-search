import type { RootState } from "./store"

export const getUserEmail = (state: RootState) => {
  return state.user.email
}

export const getFavorites = (state: RootState) => {
  return state.favorites
}

export const getHistory = (state: RootState) => {
  return state.history
}
