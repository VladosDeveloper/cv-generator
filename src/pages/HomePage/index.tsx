import { ApplicationsLayout } from '@/common/components/ApplicationsLayout'
import { HitGoal } from '@/widgets/HitGoal'
import { PageTitle } from '@/widgets/PageTitle'

export const HomePage = () => {
  return (
    <>
      <PageTitle />
      <ApplicationsLayout />
      <HitGoal />
    </>
  )
}
