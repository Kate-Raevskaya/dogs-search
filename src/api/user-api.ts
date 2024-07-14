import type { HistoryNote } from "../types/history-types"

type User = {
  password: string
  favorites: number[]
  history: HistoryNote[]
}

export function signup(email: string, password: string) {
  if (localStorage.getItem(email)) {
    return false
  } else {
    localStorage.setItem(
      email,
      JSON.stringify({ password, favorites: [], history: [] }),
    )
    return true
  }
}

export function signin(email: string, password: string) {
  let user = localStorage.getItem(email)
  if (user) {
    let userPassword: string = JSON.parse(user).password
    if (userPassword === password) {
      return true
    }
  }
  return false
}

export function getAllFavoritesDogs(email: string): number[] {
  let user = localStorage.getItem(email)
  if (user) {
    return JSON.parse(user).favorites
  }
  throw new Error("user isn't found")
}

export function addFavorite(email: string, dogId: number) {
  let userData = localStorage.getItem(email)
  if (userData) {
    let user: User = JSON.parse(userData)
    user.favorites.push(dogId)
    localStorage.setItem(email, JSON.stringify(user))
  }
}

export function removeFavorite(email: string, dogId: number) {
  let userData = localStorage.getItem(email)
  if (userData) {
    let user: User = JSON.parse(userData)
    let index = user.favorites.indexOf(dogId)
    user.favorites.splice(index, 1)
    localStorage.setItem(email, JSON.stringify(user))
  }
}

export function getAllHistoryNotes(email: string): HistoryNote[] {
  let user = localStorage.getItem(email)
  if (user) {
    return JSON.parse(user).history
  }
  throw new Error("user isn't found")
}

export function addNoteToHistory(email: string, historyNote: HistoryNote) {
  let userData = localStorage.getItem(email)
  if (userData) {
    let user: User = JSON.parse(userData)
    user.history.push(historyNote)
    localStorage.setItem(email, JSON.stringify(user))
  }
}

export function removeNoteFromHistory(email: string, historyNote: HistoryNote) {
  let userData = localStorage.getItem(email)
  if (userData) {
    let user: User = JSON.parse(userData)
    let index = user.history.findIndex(note => note.id === historyNote.id)
    user.history.splice(index, 1)
    localStorage.setItem(email, JSON.stringify(user))
  }
}

export function clearHistoryList(email: string) {
  let userData = localStorage.getItem(email)
  if (userData) {
    let user: User = JSON.parse(userData)
    user.history = []
    localStorage.setItem(email, JSON.stringify(user))
  }
}
