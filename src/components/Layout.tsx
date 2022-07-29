import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Navigator } from "./Navigator"

export const Layout: FC = () => {
  return (
    <>
      <Navigator />
      <div className="flex justify-center w-[80vw] pt-5 mx-auto">
        <Outlet />
      </div>
    </>
  )
}
