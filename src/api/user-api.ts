export function signup(email: string, password: string) {
  if (localStorage.getItem(email)) {
    return false
  } else {
    localStorage.setItem(
      email,
      JSON.stringify({ password, favorites: {}, history: {} }),
    )
    return true
  }
}
export function signin(email: string, password: string) {
  let user = localStorage.getItem(email)
  if (user) {
    let userPassword = JSON.parse(user).password
    if (userPassword === password) {
      return true
    }
  }
  return false
}
