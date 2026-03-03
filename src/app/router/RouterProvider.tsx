import { createBrowserRouter, Navigate } from 'react-router'
import { Layout } from '@/app/Layout'
import { CreateApplicationPage } from '@/pages/CreateApplicationPage'
import { HomePage } from '@/pages/HomePage'
import { RoutePaths } from '@/shared/constants/routes.ts'

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
