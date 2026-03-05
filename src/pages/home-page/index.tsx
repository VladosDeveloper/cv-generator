import { Activity } from 'react'
import { useApplicationsContext } from '@/app/providers'
import { ApplicationsLayout } from '@/feature/entities/applications-layout'
import { HitGoal } from '@/feature/entities/hit-goal'
import { ApplicationsMaxCount } from '@/shared/constants/consts'
import { PageTitle } from '@/widgets/page-title'

export const HomePage = () => {
  const { applications } = useApplicationsContext()

  return (
    <>
      <PageTitle />
      <ApplicationsLayout />

      <Activity mode={applications && applications.length > ApplicationsMaxCount ? 'hidden' : 'visible'}>
        <HitGoal />
      </Activity>
    </>
  )
}
