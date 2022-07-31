import MyNavLink from "./MyNavLink"

export const Navigator = () => {
  return (
    <nav className="my-navigation">
      <h2 className="my-navigation_title">Employees DB</h2>
      <div className="my-navigation_menu">
        <MyNavLink className="mr-2 p-1 " to="/">
          View
        </MyNavLink>
        <MyNavLink className="p-1" to="/add">
          Add
        </MyNavLink>
      </div>
    </nav>
  )
}
