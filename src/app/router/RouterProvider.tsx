import { createBrowserRouter, Navigate } from 'react-router'
import { Layout } from '@/app/Layout'
import { CreateApplicationPage } from '@/pages/create-application-page'
import { HomePage } from '@/pages/home-page'
import { RoutePaths } from '@/shared/constants/routes'

export const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    Component: Layout,
    children: [
      {
        path: RoutePaths.Home,
        Component: HomePage,
      },
      {
        path: RoutePaths.CreateNewApplication,
        Component: CreateApplicationPage,
      },
    ],

    errorElement: <Navigate to={RoutePaths.Home} replace />,
  },
])
