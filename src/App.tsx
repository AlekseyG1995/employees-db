import { Routes, Route } from "react-router-dom"
import { Navigator } from "./components/Navigator"
import { AddEmployeePage } from "./pages/AddEmployeePage"
import { EditorEmployeePage } from "./pages/EditorEmployeePage"
import { ErrorPage } from "./pages/ErrorPage"
import { ViewEmployeePage } from "./pages/ViewEmployeePage"

export const App = () => {
  return (
    <>
      <Navigator />
      <div className="flex justify-center w-[80vw] pt-5 mx-auto">
        <Routes>
          <Route path="/" element={<ViewEmployeePage />}></Route>
          <Route path="/edit" element={<EditorEmployeePage />}></Route>
          <Route path="/add" element={<AddEmployeePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </>
  )
}
