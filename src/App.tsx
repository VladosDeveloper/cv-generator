import { ApplicationsLayout } from '@/common/components/ApplicationsLayout'
import { Header } from '@/common/components/Header'
import { HitGoal } from '@/common/components/HitGoal'
import { Layout } from '@/common/components/Layout'
import { PageTitle } from '@/common/components/PageTitle'

function App() {
  return (
    <Layout>
      <Header />
      <PageTitle />
      <ApplicationsLayout />
      <HitGoal />
    </Layout>
  )
}

export default App
