import { createBrowserRouter, Navigate } from 'react-router'
import { Layout } from '@/common/components/Layout'
import { RoutePaths } from '@/constants/routes.ts'
import { CreateApplicationPage } from '@/pages/CreateApplicationPage'
import { HomePage } from '@/pages/HomePage'

export const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    Component: Layout,
    children: [
      {
        path: RoutePaths.HOME,
        Component: HomePage,
      },
      {
        path: RoutePaths.CREATE_NEW_APPLICATION,
        Component: CreateApplicationPage,
      },
    ],

    errorElement: <Navigate to={RoutePaths.HOME} replace />,
  },
])
