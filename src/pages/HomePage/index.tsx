import { Activity } from 'react'
import { useApplicationsContext } from '@/app/providers'
import { ApplicationsLayout } from '@/shared/ui/ApplicationsLayout'
import { HitGoal } from '@/widgets/HitGoal'
import { PageTitle } from '@/widgets/PageTitle'

export const HomePage = () => {
  const { applications } = useApplicationsContext()

  return (
    <>
      <PageTitle />
      <ApplicationsLayout />

      <Activity mode={applications && applications.length > 4 ? 'hidden' : 'visible'}>
        <HitGoal />
      </Activity>
    </>
  )
}
