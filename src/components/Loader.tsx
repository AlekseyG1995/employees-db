import { FC } from "react"

export const Loader:FC = () => (
  <>
    <div className="flex items-center justify-center h-screen space-x-5 animate-bounce">
      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
      <div className="w-6 h-6 bg-red-600 rounded-full"></div>
      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
    </div>
    <h2 className="text-center text-2xl">Loading...</h2>
  </>
)
