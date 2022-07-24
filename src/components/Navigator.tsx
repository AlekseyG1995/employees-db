import { Link } from "react-router-dom"

export const Navigator = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-cyan-700 text-white">
      <h2 className="text-xl font-bold">Employees DB</h2>
      <div className="flex items-center">
        <Link className="mr-2 border rounded-md p-1" to="/">View All</Link>
        <Link className="mr-2 border rounded-md p-1" to="/add">Add</Link>
        <Link className="border rounded-md p-1" to="/edit">Edit</Link>
      </div>
    </nav>
  )
}
