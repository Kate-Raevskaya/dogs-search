import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import { PrivateRoute } from "../components/PrivatRoute/PrivateRoute"
import { DogPage } from "../pages/dog-page/DogPage"
import { FavoritesPage } from "../pages/favorites/FavoritesPage"
import { HistoryPage } from "../pages/history/HistoryPage"
import { Home } from "../pages/home/Home"
import { SearchPage } from "../pages/search/SearchPage"
import { SigninPage } from "../pages/signin/SigninPage"
import { SignupPage } from "../pages/singup/SignupPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "dogs/:idParam",
        element: <DogPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "history",
        element: (
          <PrivateRoute>
            <HistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: "favorites",
        element: (
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        ),
      },
    ],
  },
])
