import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { AddEmployeePage } from "./pages/AddEmployeePage"
import { EditorEmployeePage } from "./pages/EditorEmployeePage"
import { ErrorPage } from "./pages/ErrorPage"
import { ViewEmployeePage } from "./pages/ViewEmployeePage"
import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./components/ErrorFallback"

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ViewEmployeePage />}></Route>
          <Route path="/edit/:id" element={<EditorEmployeePage />}></Route>
          <Route path="/add" element={<AddEmployeePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
