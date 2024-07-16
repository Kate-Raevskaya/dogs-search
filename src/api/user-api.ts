import type { HistoryNote } from "../types/history-types"

type User = {
  password: string
  favorites: number[]
  history: HistoryNote[]
}

type Users = {
  [key: string]: User
}

export function signup(email: string, password: string) {
  let users = localStorage.getItem("users")
  if (users) {
    let usersData: Users = JSON.parse(users)
    if (usersData[email]) {
      return false
    } else {
      usersData[email] = { password, favorites: [], history: [] }
      localStorage.setItem("users", JSON.stringify(usersData))
      localStorage.setItem("currentUser", email)
    }
  }
  localStorage.setItem(
    "users",
    JSON.stringify({ [email]: { password, favorites: [], history: [] } }),
  )
  localStorage.setItem("currentUser", email)
  return true
}

export function signin(email: string, password: string) {
  let users = localStorage.getItem("users")
  if (users) {
    let userPassword: string = JSON.parse(users)[email].password
    if (userPassword === password) {
      localStorage.setItem("currentUser", email)
      return true
    }
  }
  return false
}

export function signout() {
  localStorage.removeItem("currentUser")
}

export function isAuthenticated() {
  return localStorage.getItem("currentUser")
}

export function getAllFavoritesDogs(email: string): number[] {
  let users = localStorage.getItem("users")
  if (users) {
    return JSON.parse(users)[email].favorites
  }
  throw new Error("user isn't found")
}

export function addFavorite(email: string, dogId: number) {
  let users = localStorage.getItem("users")
  if (users) {
    let usersData: Users = JSON.parse(users)
    usersData[email].favorites.push(dogId)
    localStorage.setItem("users", JSON.stringify(usersData))
  }
}

export function removeFavorite(email: string, dogId: number) {
  let users = localStorage.getItem("users")
  if (users) {
    let usersData: Users = JSON.parse(users)
    let index = usersData[email].favorites.indexOf(dogId)
    usersData[email].favorites.splice(index, 1)
    localStorage.setItem("users", JSON.stringify(usersData))
  }
}

export function getAllHistoryNotes(email: string): HistoryNote[] {
  let users = localStorage.getItem("users")
  if (users) {
    return JSON.parse(users)[email].history
  }
  throw new Error("user isn't found")
}

export function addNoteToHistory(email: string, historyNote: HistoryNote) {
  let users = localStorage.getItem("users")
  if (users) {
    let usersData: Users = JSON.parse(users)
    usersData[email].history.push(historyNote)
    localStorage.setItem("users", JSON.stringify(usersData))
  }
}

export function removeNoteFromHistory(email: string, id: string) {
  let users = localStorage.getItem("users")
  if (users) {
    let usersData: Users = JSON.parse(users)
    let index = usersData[email].history.findIndex(note => note.id === id)
    usersData[email].history.splice(index, 1)
    localStorage.setItem("users", JSON.stringify(usersData))
  }
}

export function clearHistoryList(email: string) {
  let users = localStorage.getItem("users")
  if (users) {
    let usersData: Users = JSON.parse(users)
    usersData[email].history = []
    localStorage.setItem("users", JSON.stringify(usersData))
  }
}
