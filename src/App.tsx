import { ApplicationsLayout } from '@/common/components/ApplicationsLayout'
import { Layout } from '@/common/components/Layout'
import { HitGoal } from '@/widgets/HitGoal'
import { PageTitle } from '@/widgets/PageTitle'

function App() {
  return (
    <Layout>
      <PageTitle />
      <ApplicationsLayout />
      <HitGoal />
    </Layout>
  )
}

export default App
