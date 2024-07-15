import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { HistoryNote } from "../types/history-types"

type HistoryState = HistoryNote[]

let initialState: HistoryState = []

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryNote: (state, action: PayloadAction<HistoryNote>) => {
      state.push(action.payload)
    },
    removeHistoryNote: (state, action: PayloadAction<string>) => {
      let index = state.findIndex(note => note.id === action.payload)
      state.splice(index, 1)
    },
    initializeHistory: (state, action: PayloadAction<HistoryNote[]>) => {
      return action.payload
    },
    clearHistory: state => {
      return []
    },
    deinitializeHistory: state => {
      return []
    },
  },
})

export const {
  addHistoryNote,
  removeHistoryNote,
  initializeHistory,
  clearHistory,
  deinitializeHistory,
} = historySlice.actions

export const historyReducer = historySlice.reducer
