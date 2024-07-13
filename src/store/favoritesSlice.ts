import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type FavoritesState = number[]

let initialState: FavoritesState = []

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteDog(state, action: PayloadAction<number>) {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }
    },
    removeFavoriteDog(state, action: PayloadAction<number>) {
      let index = state.indexOf(action.payload)
      state.splice(index, 1)
    },
    initializeFavoritesDogs(state, action: PayloadAction<number[]>) {
      return action.payload
    },
    clearFavoritesDogs(state) {
      return []
    },
  },
})

export const {
  addFavoriteDog,
  removeFavoriteDog,
  initializeFavoritesDogs,
  clearFavoritesDogs,
} = favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer
