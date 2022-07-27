import { NavLink } from "react-router-dom"

export const Navigator = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-cyan-700 text-white">
      <h2 className="text-xl font-bold">Employees DB</h2>
      <div className="flex items-center">
        <NavLink className={({ isActive }) => `mr-2  p-1 ${isActive && "border rounded-md"}`} to="/">
          View All
        </NavLink>
        <NavLink className={({ isActive }) => `mr-2  p-1 ${isActive ? "border rounded-md" : ""}`} to="/add">
          Add
        </NavLink>
        {/* <NavLink className={({ isActive }) => `p-1 ${isActive ? "border rounded-md" : ""}`} to="/edit">
          Edit
        </NavLink> */}
      </div>
    </nav>
  )
}
