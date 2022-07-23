import { Routes, Route } from "react-router-dom"
import { AddEmployeePage } from "./pages/AddEmployeePage"
import { EditorEmployeePage } from "./pages/EditorEmployeePage"
import { ErrorPage } from "./pages/ErrorPage"
import { ViewEmployeePage } from "./pages/ViewEmployeePage"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ViewEmployeePage />}></Route>
        <Route path="/edit" element={<EditorEmployeePage />}></Route>
        <Route path="/add" element={<AddEmployeePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  )
}
