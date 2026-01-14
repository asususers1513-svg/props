import { createFileRoute } from '@tanstack/react-router'
import EmloyeeContent from '@/components/EmployeeContent'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <Header />
      <EmloyeeContent />
    </>
  )
}
