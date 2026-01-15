import { createFileRoute } from "@tanstack/react-router"
import Header from "@/components/Header"
import EmloyeeContent from "@/components/EmployeeContent"

export const Route = createFileRoute("/")({
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
