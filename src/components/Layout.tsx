import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navigator } from "./Navigator"

export const Layout: FC = () => {

  return (
    <div className="my-layout">
      <Navigator />
      <div className="border overflow-y-hidden flex-grow-[1] border-red-600 w-full px-2 md:px-5 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
