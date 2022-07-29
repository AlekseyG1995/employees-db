import { NavLink } from "react-router-dom"
import MyNavLink from "./MyNavLink"

export const Navigator = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-cyan-700 text-white">
      <h2 className="text-xl font-bold">Employees DB</h2>
      <div className="flex items-center">
        <MyNavLink className="mr-2 p-1 " to="/">
          View All
        </MyNavLink>
        <MyNavLink className="p-1" to="/add">
          Add
        </MyNavLink>
        {/* <NavLink className={({ isActive }) => `p-1 ${isActive ? "border rounded-md" : ""}`} to="/edit">
          Edit
        </NavLink> */}
      </div>
    </nav>
  )
}
