import { Activity } from 'react'
import { ApplicationsLayout } from '@/common/components/ApplicationsLayout'
import { useApplicationsContext } from '@/common/lib/ctx.tsx'
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
