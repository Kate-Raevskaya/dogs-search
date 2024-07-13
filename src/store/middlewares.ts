import { createListenerMiddleware } from "@reduxjs/toolkit"

import {
  addFavorite,
  getAllFavoritesDogs,
  removeFavorite,
} from "../api/user-api"
import {
  addFavoriteDog,
  clearFavoritesDogs,
  initializeFavoritesDogs,
  removeFavoriteDog,
} from "./favoritesSlice"
import type { AppDispatch, RootState } from "./store"
import { removeUser, setUser } from "./userSlice"

export const listenerMiddleware = createListenerMiddleware()

export const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>()

startAppListening({
  actionCreator: addFavoriteDog,
  effect: (action, listenerApi) => {
    let email = listenerApi.getState().user.email
    if (email) {
      addFavorite(email, action.payload)
    }
  },
})

startAppListening({
  actionCreator: removeFavoriteDog,
  effect: (action, listenerApi) => {
    let email = listenerApi.getState().user.email
    if (email) {
      removeFavorite(email, action.payload)
    }
  },
})

startAppListening({
  actionCreator: setUser,
  effect: (action, listenerApi) => {
    if (action.payload.email) {
      listenerApi.dispatch(
        initializeFavoritesDogs(getAllFavoritesDogs(action.payload.email)),
      )
    }
  },
})

startAppListening({
  actionCreator: removeUser,
  effect: (action, listenerApi) => {
    listenerApi.dispatch(clearFavoritesDogs())
  },
})
