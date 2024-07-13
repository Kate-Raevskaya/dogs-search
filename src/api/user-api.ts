type User = {
  password: string
  favorites: number[]
  history: string[]
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
