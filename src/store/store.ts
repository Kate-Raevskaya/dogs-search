import { configureStore } from "@reduxjs/toolkit"

import { apiSlice } from "./apiSlice"
import { favoritesReducer } from "./favoritesSlice"
import { listenerMiddleware } from "./middlewares"
import { userReducer } from "./userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .prepend(listenerMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
