import { createBrowserRouter, Navigate } from 'react-router'
import { Layout } from '@/common/components/Layout'
import { RoutePaths } from '@/constants/routes.ts'
import { CreateApplicationPage } from '@/pages/CreateApplicationPage'
import { HomePage } from '@/pages/HomePage'

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
