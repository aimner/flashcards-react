import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DecksPage } from './pages/decks/decks.page'
import { SignInPage } from './pages/sign-in'
import { SignUpPage } from './pages/sign-up'

const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/registration' },
  {
    element: <div>ERROR</div>,
    path: '/*',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/*',
  },
]

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const router = createBrowserRouter([
  { children: privateRoutes, element: <PrivateRoutes /> },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
